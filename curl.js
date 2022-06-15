const request = require('request');

module.exports = function(url) {
    request(url, function(err, res, body) {
        if (err) throw err;
        else {
            process.stdout.write(body.toString());
            process.stdout.write('\nprompt > ');
        }
    });
};