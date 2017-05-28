require('async-for-each');

var fs = require('fs');

var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];
var FinalResult = "";

paths.asyncForEach(function(path, barrier) {
    fs.readFile(path, 'utf8', function(err, data) {

        // here we wait for random time
        setTimeout(function() {
            FinalResult += data.replace(/^\s*|\s*$/g,'')+ " ";

            barrier();
        }, Math.floor(Math.random() * 10));

    });
}, () => console.log(FinalResult));
