var fs = require('fs');
var simpleBarrier = require('simple-barrier');
 
// create a barrier instance 
var barrier = simpleBarrier();
 
var action = (err, data) => {
  return parseInt(data);
};

// load some files, let the barrier handle the callbacks: 
fs.readFile('first-file', barrier.waitOn(action));
fs.readFile('second-file', barrier.waitOn(action));
fs.readFile('third-file', barrier.waitOn(action));
 
// add a callback for when all files are loaded 
barrier.endWith(function( results ){
   
   // Results is an array of the values given by fs.readFile 
   // the array is in the order that barrier.waitOn() was called, regardless of the  
   // order they were loaded in 
   console.log('results:', results.join(','));
});
