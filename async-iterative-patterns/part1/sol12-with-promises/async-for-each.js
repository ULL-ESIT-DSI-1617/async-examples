Array.prototype.asyncForEach = function(asyncTask, callback) {
    var promises = [];
    this.forEach((element) => {
      promises.push(new Promise(function(resolve, reject) {
          asyncTask(element, resolve);
        })
      );
    });
    var result = Promise.all(promises).then(() => {
      callback()
    });
};

Array.prototype.seqAsync = function(promiseTask, callback) {
  var p = promiseTask(this.shift()); 

  this.forEach(function(element){
    p = p.then(function(){ return promiseTask(element); }); 
  });
  p.then(callback);
  return p;
};
