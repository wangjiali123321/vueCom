'use strict'
 
const path = require('path')
const multiConfig = require('./multi.conf')
 
module.exports = {
  dev: {
 
    // Paths
    assetsSubDirectory: multiConfig.process.assetsSubDirectory,
    assetsPublicPath: multiConfig.process.assetsPublicPath,
    proxyTable: multiConfig.process.proxyTable,
 
    // Various Dev Server settings
    host: multiConfig.process.host, // can be overwritten by process.env.HOST
    port: multiConfig.process.port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true, //自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
 
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
 
    /**
     * Source Maps
     */
 
    devtool: 'cheap-module-source-map',
    cacheBusting: true,
    cssSourceMap: true,
  },
 
  build: {
    // Template for index.html
    index: multiConfig.process.index,
 
    // Paths
    assetsRoot: multiConfig.process.assetsRoot,
    assetsSubDirectory: multiConfig.process.assetsSubDirectory,
    assetsPublicPath: multiConfig.process.assetsBuildPublicPath + '/',
 
    /**
     * Source Maps
     */
 
    productionSourceMap: true,
    devtool: 'source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}