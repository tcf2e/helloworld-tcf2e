const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle-[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html")
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "main.html"),
      filename: path.resolve(__dirname, "dist", "main.html")
    }),
    new SpritesmithPlugin({
      src: {
          cwd: path.resolve(__dirname, 'src/icons'),
          glob: '*.png'
      },
      target: {
          image: path.resolve(__dirname, 'src/sprite/sprite.png'),
          css: path.resolve(__dirname, 'src/sprite/sprite.css')
      },
      apiOptions: {
          cssImageRef: "sprite.png"
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              publicPath: "/images"
            }
          },
          {
            loader: "image-webpack-loader",
          }
        ]
      }
    ]
  }
}