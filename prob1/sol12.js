
function WaterfallOver(list, iterator, callback) {

    var nextItemIndex = 0;  //keep track of the index of the next item to be processed

    function report() {

        nextItemIndex++;

        // if nextItemIndex equals the number of items in list, then we're done
        if(nextItemIndex === list.length)
            callback();
        else
            // otherwise, call the iterator on the next item
            iterator(list[nextItemIndex], report);
    }

    // instead of starting all the iterations, we only start the 1st one
    iterator(list[0], report);
}

var fs = require('fs');
var paths = [
             'first-file',  // contains 10
             'second-file',  // contains 7
             'third-file'  // contains 5
             ];
var FinalResult = "";

WaterfallOver(paths, function(path, report) {
    fs.readFile(path, 'utf8', function(err, data) {

        // here we wait for random time
        setTimeout(function() {
            FinalResult += data + " ";

            report();
        }, Math.floor(Math.random() * 10));

    });
}, function() {
    console.log(FinalResult);
});

