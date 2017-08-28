'use strict';

var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var StatsPlugin = require('stats-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack/hot/poll?1000',
    './src/app.js'
  ],
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: 'app.js', // this should match the first part of function handler in serverless.yml
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

// module.exports = {
//   entry: [
//     path.join(__dirname, 'handler.js')
//   ],
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'handler.js',
//     publicPath: '/'
//   },
//   plugins: [
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     // new HtmlWebpackPlugin({
//     //   template: 'app/index.tpl.html',
//     //   inject: 'body',
//     //   filename: 'index.html'
//     // }),
//     // new ExtractTextPlugin('[name]-[hash].min.css'),
//     // new webpack.optimize.UglifyJsPlugin({
//     //   compressor: {
//     //     warnings: false,
//     //     screw_ie8: true
//     //   }
//     // }),
//     // new StatsPlugin('webpack.stats.json', {
//     //   source: false,
//     //   modules: false
//     // }),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//     })
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           "presets": ["es2015"]
//         }
//       }, {
//         test: /\.json?$/,
//         loader: 'json-loader'
//       // }, {
//       //   test: /\.css$/,
//       //   loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
//       }
//     ]
//   },
//   target: 'node',
//   externals: [
//     nodeExternals()
//     // {
//     //   'express': 'commonjs express'
//     // }
//   ]
//   // postcss: [
//   //   require('autoprefixer')
//   // ]
// };
