const fs = require('fs');

module.exports = function(func) {
    fs.readdir('./', (err, files) => {
        if (err) {
            throw err;
        }
        else {
            func(files.join('\n'));
        }
    });
};