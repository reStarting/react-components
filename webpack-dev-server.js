var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var fs = require('fs')
var path = require('path')
var child_process = require('child_process')

var files = fs.readdirSync('./src/entries')
files.map(file => {
  var entry = path.basename(file, '.js');
  if(entry != '.DS_Store')
  {
    var entryFile = ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server', 'babel-polyfill', './src/entries/'+ file];
    webpackConfig.entry[entry] = entryFile
  }
})

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

var compiler = webpack(webpackConfig);
new webpackDevServer(compiler, options).listen(3000, 'localhost', function() {
    console.info("==> 🌍  Open up localhost:3000 in your browser.");
    child_process.exec('open localhost:3000/html/')
});
