const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
