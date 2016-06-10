var webpack = require('webpack');
var path = require('path');
var clientConfig = require('./config/webpack.dev.client.js');
var serverConfig = require('./config/webpack.dev.server.js');
var helpers = require('./config/helpers');

var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
    preLoaders: [
      // needed to lower the filesize of angular due to inline source-maps
      { test: /\.js$/, loader: 'source-map-loader', exclude: [
        // these packages have problems with their sourcemaps
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular'),
      ]}
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]

};


// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: helpers.root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'bundle.js'
  }
}



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
]

