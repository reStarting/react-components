var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
    },
    output: {
    	publicPath: 'http://localhost:3000/dist/',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(), 
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },{
            test: /\.less$/,
            loaders: ['style','css','less'],
            exclude: /node_modules/
        },{ 
            test: /\.tsx?$/, 
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'cheap-module-eval-source-map'
};

module.exports = config;
