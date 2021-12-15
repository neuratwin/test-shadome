const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },

  devtool: "source-map",

  devServer: {
    port: 8000,
    liveReload: true,
    historyApiFallback: true,
    watchFiles: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  plugins: [new Dotenv()],
};
