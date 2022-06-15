const request = require('request');

module.exports = function(url, func) {
    request(url, function(err, res, body) {
        if (err) throw err;
        else {
            func(body.toString());
        }
    });
};