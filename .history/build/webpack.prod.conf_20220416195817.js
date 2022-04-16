'use strict'
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const multiConfig = require('../config/multi.conf')
const TerserWebpackPlugin = require('terser-webpack-plugin');
 
const env = require('../config/prod.env')
 
function isDirectory(path) {
  try {
    let stat = fs.statSync(path)
    return stat.isDirectory()
  } catch (e) {
    return false
  }
}
 
const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    clean: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          },
          format: {
            comments: false
          }
        }
      }),
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: { name: 'runtime' },
    concatenateModules: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -10
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      },
    },
    moduleIds: 'deterministic'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      favicon: path.resolve('./src/common/images/favicon.ico'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'auto'
    }),
    // copy custom static assets
    new CopyWebpackPlugin(multiConfig.process.publics.filter(name => isDirectory(path.resolve(__dirname, `../static/${name}`))).map(name => {
      return {
        from: path.resolve(__dirname, `../static/${name}`),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    })),
    // pack zip
    ...require('./packZip')
  ]
})
 
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
 
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}
 
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
 
module.exports = webpackConfig