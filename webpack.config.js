const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/c.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        use: "ts-loader",
        exclude: /(pseudo|node)_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  optimization: {
    concatenateModules: false,
    minimizer: [],
    usedExports: true,
  }
};
