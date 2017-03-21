var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './app/_common/polyfills.ts',
    'vendor': './app/_common/vendor.ts',
    'app': './app/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('wwwroot', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('wwwroot', 'app'),
        loader: 'raw'
      },
      // { 
      //   test: /\.scss$/,
      //   exclude:"app/styles",
      //   loaders: ["exports-loader?module.exports.toString()", "css?sourceMap", "sass?sourceMap"]
      // },
      // { 
      //   test: /\.scss$/,
      //   include:"app/styles",
      //   loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      // }
      
      //if we need compile scss files != RegEx above, we must write new RegEx template
      // { 
      //   test: /\.scss$/,
      //   loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      // }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
        template: 'app/index.html'
    }),

    // new CopyWebpackPlugin([
    //     {from:'app/styles/default/images', to: 'assets'},
    //     {from:'app/styles/default/fonts/font-files', to: 'assets'}
    // ])
  ]
};
