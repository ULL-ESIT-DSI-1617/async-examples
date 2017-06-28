var fs = require('fs');
var async = require('async');
 
var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];

function readAsync(file, callback) {
    fs.readFile(file, 'utf8', callback);
}

async.map(paths, readAsync, function(err, results) {
  let result = results.map((x) => x.replace(/^\s*|\s*$/g, "")).reduce((s,x) => s += ' '+x);
  console.log(result); // results is "10 7 5"
});



