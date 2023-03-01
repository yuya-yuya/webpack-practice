module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.join(__dirname, 'public')
  }
}


