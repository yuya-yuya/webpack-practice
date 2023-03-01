const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000
  }
}


