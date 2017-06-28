require("async-for-each");
var fs = require('fs');

var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];
var FinalResult = "";

var readFilesInOrder = (path, nextTask) => {
  fs.readFile(path, 'utf8', function(err, data) {
      // here we wait for random time
      setTimeout(function() {
          FinalResult += data + " ";
          nextTask();
      }, Math.floor(Math.random() * 10));

  });
};

paths.pipe(readFilesInOrder, () => { console.log(FinalResult); });

