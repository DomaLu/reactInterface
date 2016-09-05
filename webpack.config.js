var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: 'build',
    path: path.join(__dirname, 'build')
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react','stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!autoprefixer!sass?sourceMap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devtool: "source-map"
}
