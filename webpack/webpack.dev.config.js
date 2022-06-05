const path = require('path')
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
    }),
    new HtmlWebpackPlugin({
      filename: "image-page.html",
      chunks: ['image-page'],
      title: 'Image Page',
    })
  ],
  devServer: {
    port: 3000,
    static: {
      directory: resolve(__dirname, '../dist'),
    },
    devMiddleware: {
      index: true,
      writeToDisk: true
    },
    hot: true
  },
  mode: 'development'
}