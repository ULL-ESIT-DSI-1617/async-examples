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
