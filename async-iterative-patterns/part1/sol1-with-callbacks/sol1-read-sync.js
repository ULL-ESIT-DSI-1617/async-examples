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
    var num = parseInt(fs.readFileSync(paths[i], 'utf8'));
    totalSum += num;
}

// invoke the callback
PrintTotalSum();
