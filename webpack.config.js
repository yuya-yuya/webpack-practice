const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./src/javascripts/main.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "./javascripts/main.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /nodemodules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [ "@babel/preset-env"]
            } 
          }
        ]
      },
      {
        test: /\.css|\.sass|\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.png|\.jpg/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name].png"
            }
          }
        ]
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/style.css'
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html"
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 3000
  }
}


