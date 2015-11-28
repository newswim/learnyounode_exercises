// var filterFn    = require('./filter_function.js')
// var dir         = process.argv[2]
// var filterStr   = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })


var filterDir = require('./filter_function');

var dirPath = process.argv[2],
    extension = process.argv[3];

filterDir(dirPath, extension, function (err, list) {
    if (err) {
        console.log('An error happened when reading ' + dirPath);
    return err;
    }

    list.forEach(function (filename) {
        console.log(filename);
    });
});
