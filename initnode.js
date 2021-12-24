const SimpleGit = require('simple-git');
let git = SimpleGit('my-own-vuex')
const status = git.status();
console.log(status)