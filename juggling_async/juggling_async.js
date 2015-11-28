var http    = require('http');
var files   = [];
var results = [];
var _       = require('underscore-node');
var count   = 0;

files.push(process.argv[2]);
files.push(process.argv[3]);
files.push(process.argv[4]);

function printResults() {
    files.forEach (function(url) {
        console.log(results[url]);
    })
}

files.forEach(function (url) {
    http.get(url, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            if (results[url] === undefined) {
                results[url] = chunk;
            } else {
                results[url] += chunk;
            }
        });
        response.on('end', function () {
            count ++;
            if (count == 3) {
                printResults();
            }
        });
        response.on('error', console.error);
    });
})
