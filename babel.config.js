const plugins = ['transform-object-rest-spread']
// 生产环境移除console
if (process.env.NODE_ENV === 'production') {
  // plugins.push('transform-remove-console')
  plugins.push('./babelplugins/consolePlugin')
}
module.exports = {
  plugins: plugins,
  presets: [
    '@vue/app'
  ]
}