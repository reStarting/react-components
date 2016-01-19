var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
    	'react-components': ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', './src/index.js']
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
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map'
};

module.exports = config;
