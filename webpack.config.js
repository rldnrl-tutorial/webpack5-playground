const path = require('path')

const resolve = path.resolve

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  mode: 'none'
}