const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

let config = {
  mode: 'development',
  // mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost',
    compress: true,
    port: 8888,
    historyApiFallback:true
  }
};
module.exports = merge(baseConfig, config);