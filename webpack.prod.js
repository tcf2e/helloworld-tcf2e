const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new UglifyJsPlugin,
    new CompressionWebpackPlugin,
    new OptimizeCssAssetsWebpackPlugin,
    new CleanWebpackPlugin(['dist'])
  ]
})