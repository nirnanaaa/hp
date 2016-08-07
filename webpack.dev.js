/* eslint-disable */
var path = require("path");
var webpack = require("webpack");
var rootPath = 'public/js';
module.exports = {
  cache: true,
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    root: path.join(__dirname, rootPath, 'new'),
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    reactPackage: path.join(__dirname, rootPath, 'new', 'loader.js'),
    helpers: path.join(__dirname, rootPath, 'new', 'helpers.js'),
    'translate.pre': path.join(__dirname, rootPath, 'new', 'helpers', 'translate.win.js'),
    'debug.pre': path.join(__dirname, rootPath, 'new', 'helpers', 'debug.js'),
    'modules.pre': path.join(__dirname, rootPath, 'new', 'helpers', 'modules.win.js'),
    notifications: path.join(__dirname, rootPath, 'new', 'modules', 'containers', 'Notifications', 'index.js'),
  },
  output: {
    path: path.join(__dirname, rootPath, '..', 'compressed', 'js'),
    publicPath: "/compressed/js/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-0'],
        env: {
          development: {
            plugins: [
              ['react-transform', {
                transforms: []
              }]
            ]
          },
          production: {
            plugins: [
              'transform-react-remove-prop-types',
              'transform-react-constant-elements'
            ]
          }
        }
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true  // <-------- DISABLE redux-devtools HERE
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|es/)
  ]
};
