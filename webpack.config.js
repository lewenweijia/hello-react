const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: "src/app.jsx",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /node-modules/,
        use: { loader: 'babel-loader' }}
    ]
  }
}
