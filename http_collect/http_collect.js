var http         = require('http');
var concatStream = require('concat-stream');
// var _            = require('underscore-node');

var url = process.argv[2];


http.get(url, function(response){
    var result = "";
    response.setEncoding("utf8");
    response.on("data", function(data){
        result += data;
    });
    response.pipe(concatStream(function(result, err) {
        console.log(result.length);
        console.log(result);
    }));
});
