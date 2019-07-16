const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ENV = require('./env')

const { PORT } = ENV[process.env.NODE_ENV]

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules'],
        use: [
          {
            loader: 'babel-loader',
            query: { compact: false },
          },
          {
            loader: 'eslint-loader',
            query: { compact: false },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              data: `$ASSETS: '/assets/';`,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new SimpleProgressWebpackPlugin({ format: 'compact' }),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebPackPlugin({ template: './public/index.html' }),
    new ErrorOverlayPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: 'assets/images', to: 'assets/images' }]),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: PORT,
      proxy: 'http://localhost:8080/',
      open: false,
    }),
  ],
}
