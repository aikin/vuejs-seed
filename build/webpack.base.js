'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
  require('autoprefixer')({
    browsers: ['last 2 versions', 'ie > 8']
  }),
  require('precss')
]

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist/assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../src'),
      components: path.join(__dirname, '../src/components')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(vue|js)$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      }
    ]
  },
  postcss,
  vue: {
    loaders: {},
    postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html',
      inject: true
    })
  ]
}
