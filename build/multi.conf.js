const path = require('path')
const pack = require('../package.json')
const argvs = process.argv.slice(2)
const urlConfig = require('../src/proxyUrl/proxyUrl')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}
 
function getModuleAlias () {
  let alias = {}
  importModules.forEach(({ name }) => {
    alias[`@${name}`] = resolve(`src/${name}`)
  })
  return alias
}
 
class MultiModule {
  constructor (name, opts) {
    let datetime = Date.now()
    Object.assign(this, {
      name,
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      port: 8080,
      host: 'localhost',
      proxyTable: null,
      entry: {
        app: ['@babel/polyfill', `./src/${name}/main.js`]
      },
      alias: resolve(`src/${name}`),
      index: path.resolve(__dirname, `${argvs[0]}/template/index.html`),
      // favicon: path.resolve(__dirname, `E:/build/${name}/favicon.ico`),
      assetsRoot: path.resolve(__dirname, `${argvs[0]}/template`),
      pubdate: `${name}_v${pack.version}_${datetime}`,
      publics: [name].concat(opts.statics || []),
      deployConfig: null
    }, opts)
  }
}
 
function getModuleProcess (name) {
  let mItem = importModules.find(item => item.name === name)
  return mItem || importModules[0]
}
 
function proxyHandle (proxyReq, req, res, options) {
  let origin = `${options.target.protocol}//${options.target.hostname}`
  proxyReq.setHeader('origin', origin)
  proxyReq.setHeader('referer', origin)
}
 
function onProxyReq (proxyReq, req, res, options) {
  proxyHandle(proxyReq, req, res, options)
}
 
function onProxyReqWs (proxyReq, req, socket, options, head) {
  proxyHandle(proxyReq, req, socket, options)
}
 
function getProxyConfig (targetOpt, options) {
  let target = targetOpt.isLocal ? targetOpt.target.substring(0, targetOpt.target.length - 1) :  targetOpt.target + targetOpt.name
  return Object.assign({
    target,
    // secure: false,
    changeOrigin: true,
    secure: false,
    // ws: false,
    // cookieDomainRewrite: { '*': '' },
    // cookiePathRewrite: { '*': '/' },
    pathRewrite: {'^/API': target},
    // onProxyReq,
    // onProxyReqWs
  }, options)
}
 
const PROXY_DOMAIN_DEFAULT = urlConfig.url
const IS_LOCAL = urlConfig.isLocal
// 多模块独立配置
var importModules = [
  new MultiModule('*****', {
    port: 7007,
    statics: ['****'],
    assetsBuildPublicPath: getProxyConfig({target: PROXY_DOMAIN_DEFAULT, name: '****', isLocal: IS_LOCAL}).target,
    proxyTable: {
      '/API': getProxyConfig({target: PROXY_DOMAIN_DEFAULT, name: '', isLocal: IS_LOCAL})
    }
  }),
]
var lifecycleEvents = String(process.env.npm_lifecycle_event).split(':')
var moduleName = getParams('name')[1] || lifecycleEvents[1]
const multiConfig = {
  modules: importModules,
  moduleAlias: getModuleAlias(),
  process: getModuleProcess(moduleName)
}
module.exports = multiConfig