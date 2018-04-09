const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

const publicPath = '/scripts/';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('public', 'scripts'),
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  },
  plugins: [
    new FlowBabelWebpackPlugin()
  ]
};
