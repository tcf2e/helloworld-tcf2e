const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  },
})