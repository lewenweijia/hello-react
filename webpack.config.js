const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "src/app.jsx",
  outptu: {
    path: "dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node-modules/,
        use: { loader: 'babel-loader' }}
    ]
  }
}
