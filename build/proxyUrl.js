const mode = require('./mode')
const urlList = {
  uat: '',
  dev: '',
  online: '',
}
 
module.exports = {
  url: urlList[mode],
  isLocal: !urlList[mode].includes('*****')
}