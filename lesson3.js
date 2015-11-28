var fs    = require('fs');
// file  = process.argv[2];

var bufObj = fs.readFileSync(process.argv[2]);
var output = bufObj.toString().split('\n').length - 1;

console.log(output);
