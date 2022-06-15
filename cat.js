const fs = require('fs');

module.exports = function(item, func) {
        fs.readFile(item, (err, buff) => {
            if (err) {
              throw err;
            } else {
                func(buff.toString());
            }
        });
}