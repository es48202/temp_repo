/*
Author: Tu Hoang

Webpack configuration
*/

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    devtool: 'cheap-module-source-map',
    entry: {
      vendor: [
        'jquery',
        'backbone',
        'react',
        'react-dom',
        'bootstrap',
        'leaflet',
        'bluebird'
      ],
      dashboard: ['babel-polyfill', './src/client/js/index.js']

    },
    output: {
      filename: '[name]-bundle.js',
      // path: path.resolve(__dirname, '/src/build')
      path: path.resolve('public/build')
    },
    module: {
      rules: [{
        include: [
          // path.resolve('node_modules/leaflet-view/src'),
          // fs.realpathSync(path.resolve('node_modules', './leaflet-view/src')),
          // fs.realpathSync(path.resolve('node_modules', './dashboard-react-components')),
          path.resolve('src')
        ],
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: [{
          loader: "file-loader"
        }]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }]
    },
    plugins: [
      //common chunks
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // Specify the common bundle's name.
        filename: 'vendor-bundle.js',
        minChunks: function(module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new ExtractTextPlugin({ //for css extraction
        filename: "./[name]-style.css",
        // disable: process.env.NODE_ENV === "development",
        allChunks: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': 'jquery',
        _: 'lodash',
        Backbone: 'backbone',
        React: 'react',
        ReactDOM: 'react-dom',
        L: 'leaflet',
        nv: 'nvd3',
        Popper: ['popper.js', 'default']
      })
    ],
    //package name resolver
    resolve: {
      // alias: {
      //   jquery: 'jquery-3.1.1/jquery.min.js',
      //   underscore: 'underscore/underscore-min.js',
      //   backbone: 'backbone/backbone-min.js'
      // },
      // modules: ['lib', 'bower_components', 'node_modules']
    }
  };
};
