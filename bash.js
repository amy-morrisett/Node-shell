const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        pwd();
    }
    else if (cmd === 'ls') {
        ls();
    } else if (cmd.split(" ")[0] === 'cat') {
        const files = cmd.split(" ");
        for (let item of files.slice(1)) {
            cat(item);
        }
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});