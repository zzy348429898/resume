const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// let extractLess = new ExtractTextPlugin('stylesheets/[name].less');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[contenthash].js'
  },
  resolve:{
    extensions: ['.tsx', 'ts', '.jsx', '.js', '.json', 'less', 'css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015'], ['stage-0'], ['react']]
        }
      },
      {
        test:/\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test:/\.less$/,
        include: path.resolve('src/'),
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              less: true,
              localIdentName: '[name]__[local]__[hash:base64:5]123'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test:/\.css$/,
        include: path.resolve('src/'),
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=1024'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash]_[hash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 源模板文件
      filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
      showErrors: true,
      inject: 'body',
      hash: true
    }),
    new CleanWebpackPlugin()
  ]
};