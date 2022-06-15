const fs = require('fs');

module.exports = function(item) {
        fs.readFile(item, (err, buff) => {
            if (err) {
              throw err;
            } else {
                process.stdout.write(buff.toString());
                process.stdout.write('\nprompt > ');
            }
        });
}