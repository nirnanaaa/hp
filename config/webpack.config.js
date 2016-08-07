/* eslint-disable */
import path from 'path';
import webpack from 'webpack';
import extend from 'extend';
// import AssetsPlugin from 'assets-webpack-plugin';
import glob from 'glob';

const rootPath = '../public/scripts';
const scriptsPath = '../app/assets/javascripts';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const WATCH = process.argv.includes('--watch');
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};

module.exports = {
  watch: WATCH,
  cache: DEBUG,
  debug: DEBUG,
  stats: {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
  },
  name: 'client',
  target: 'web',
  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
  resolve: {
    root: path.join(__dirname, scriptsPath),
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    ...glob.sync(path.join(__dirname, scriptsPath, '**/*.pre.js')).reduce((all, current) => ({
      ...all,
      [path.basename(current).replace('.js', '')]: current,
    }),{}),
    core: path.join(__dirname, scriptsPath, 'scripts.js'),
  },
  output: {
    path: path.join(__dirname, rootPath),
    publicPath: "/scripts/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: DEBUG,
        plugins: ['transform-runtime'],
        babelrc: false,
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
    new webpack.DefinePlugin({ ...GLOBALS, 'process.env.BROWSER': true }),
    // Assign the module and chunk ids by occurrence count
    // Consistent ordering of modules required if using any hashing ([hash] or [chunkhash])
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    new webpack.optimize.OccurrenceOrderPlugin(true),

    ...DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]
  ]
};
