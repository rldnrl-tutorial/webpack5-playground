const path = require('path')

const resolve = path.resolve

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /.(png|jpg)$/,
        type: 'asset',
      },
      {
        test: /.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  mode: 'none'
}