const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "main.js"
  },
  devServer: {
    port: 3000
  }
}


