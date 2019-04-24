const merge = require('webpack-merge');//webpack配置文件合并工具
const baseConfig = require('./webpack.base.js');//基础配置
const path = require('path');

let config = {
  mode:'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: 'bundle.js',
    // filename: '[name]_[id]_[hash]',
    publicPath: ''
  }
};
// console.log(merge(baseConfig, config));
module.exports = merge(baseConfig, config);