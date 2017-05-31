require('async-for-each');

var fs = require('fs');

var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];
var totalSum = 0;

// this the callback we need to call after all iteration finish
function printTotalSum() { console.log(totalSum); }


var asyncTask = function(path, barrier) {
    fs.readFile(path, 'utf8', function(err, data) {

        var num = parseInt(data);
        totalSum += num;
        
        // we must call barrier to report back iteration completion
        barrier();
    });
};

paths.asyncForEach(asyncTask, printTotalSum);

