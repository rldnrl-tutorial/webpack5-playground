const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = path.resolve

module.exports = {
  entry: {
    'hello-world': resolve(__dirname, '../src/pages/HelloWorldPage.js'),
    'image-page': resolve(__dirname, '../src/pages/ImagePage.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, '../dist'),
    publicPath: resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: "image-page.html",
      chunks: ['image-page'],
      title: 'Image Page',
      minify: false
    })
  ],
  mode: 'production'
}