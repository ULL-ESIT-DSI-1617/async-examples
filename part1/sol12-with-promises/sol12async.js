require('async-for-each');

var fs = require('fs');

var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];
var finalResult = [];

function printTotalSum() { console.log("finalResult = <"+finalResult+">"); }

function readFile(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(err, data) {
      finalResult.push(data.replace(/\s+/g,''));
      //console.log(finalResult);
      resolve();
    });
  })
}

paths.seqAsync(readFile, printTotalSum);

