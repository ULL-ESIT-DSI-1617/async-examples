Array.prototype.asyncForEach = function(asynTask, callback) {
    // this is the function that will start all the jobs
    // this is the collections of item we want to iterate over
    // asynTask is a function representing the job when want done on each item
    // callback is the function we want to call when all iterations are over

    var doneCount = 0;  // here we'll keep track of how many reports we've got

    barrier = () => {
        // this function resembles the phone number in the analogy above
        // given to each call of the asynTask so it can report its completion

        doneCount++;

        // if doneCount equals the number of items in this, then we're done
        if(doneCount >= this.length) {
          callback();
        }
    }

    // here we give each iteration its job
    for(var i = 0; i < this.length; i++) {
        // asynTask takes 2 arguments, an item to work on and barrier function
        asynTask(this[i], barrier)
    }
};
