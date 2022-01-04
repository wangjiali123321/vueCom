const SimpleGit = require('simple-git');
console.log(__dirname)
let git = SimpleGit(__dirname)
const status = git.status();
console.log('status',status)