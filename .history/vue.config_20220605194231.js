'use strict'
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/edge/',
  outputDir: 'edge',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      // add this configuration in the development environment
      const DebugPlugin = require('webpack-vue-debug-plugin');
      config.modulegit 
        .rule('vue')
        .test(/\.vue$/)
        .use('webpack-vue-debug-loader')
        .loader('webpack-vue-debug-loader')
        .end();
      config.plugin('webpack-vue-debug-plugin').use(new DebugPlugin());
    }
  }

}


