const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          outputPath: 'img',
        },
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SongGuesser',
      favicon: './src/assets/img/mic.png',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new HtmlWebpackRootPlugin(),
    new CleanWebpackPlugin(),
    new WebpackNotifierPlugin(),
  ],
};
