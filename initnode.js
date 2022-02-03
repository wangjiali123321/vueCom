const SimpleGit = require('simple-git');


checkConflicted = async () => { 
    console.log(__dirname)
    let git = SimpleGit(__dirname)
    const status = await git.status();
    console.log('status',status)
}

checkConflicted()