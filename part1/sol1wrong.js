var fs = require('fs');

var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // conatains 5
             ];
var totalSum = 0;

// this the callback we need to call after all iteration finish
function PrintTotalSum() { console.log(totalSum); }

for(var i = 0; i < paths.length; i++) {

    fs.readFile(paths[i], 'utf8', function(err, data) {
        var num = parseInt(data);
        totalSum += num;
    });
}

// invoke the callback
PrintTotalSum();
/*
The Problem is that we used the asynchronous `fs.readFile` with the for-loop. At each iteration of the for-loop, a file is requested to be read  from disk, and because this is an asynchronous request the for-loop doesn't wait for the respond and goes on to the next iteration and request the next file. As soon as the for-loop ends, the line calling the `PrintTotalSum` function will be executed immediatly while the files are still being read. At the time `PrintTotalSum` is executed, it finds the value of `totalSum` to be 0, and so a 0 is what you get.
*/
