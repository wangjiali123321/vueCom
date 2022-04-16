const pack = require('../package.json')
const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const multiConfig = require('../config/multi.conf')
const argvs = process.argv.slice(2)
 
function getParams (key) {
  let item = argvs.find(item => item.split('=')[0] === key)
  return item ? item.split('=') : []
}
 
let datetime = Date.now()
let plugins = []
 
let zipPros = getParams('zip')
if (zipPros.length) {
  plugins.push(new FileManagerPlugin({
    onEnd: {
      archive: [{
        source: path.resolve(__dirname, `${argvs[0]}`),
        destination: path.resolve(__dirname, zipPros[1] ? `${argvs[0]}.zip` : `${argvs[0]}.zip`)
      }]
    }
  }))
}
 
module.exports = plugins