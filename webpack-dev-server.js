var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

var options = {
    hot: false,
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    stats: {
        colors: true
    }
};


Object.assign(options, {
    hot: true,
    noInfo: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
});

var child_process = require('child_process')
var compiler = webpack(webpackConfig);
new webpackDevServer(compiler, options).listen(3000, 'localhost', function() {
    console.info("==> 🌍  Open up localhost:3000 in your browser.");
    child_process.exec('open localhost:3000/html')
});
