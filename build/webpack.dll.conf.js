'use strict'
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('../config')
const library = Object.keys(require('../package.json').dependencies)

const libsPath = path.resolve(__dirname, '../static/libs')

module.exports = {
  mode: 'none',
  entry: {
    vendors: library
  },
  output: {
    path: libsPath,
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(libsPath, '[name]_mainfest.json'),
      name: '[name]_library'
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: config.build.productionSourceMap, // set to true if you want JS source maps,
      uglifyOptions: {
        warnings: false
      }
    })
  ]
}
