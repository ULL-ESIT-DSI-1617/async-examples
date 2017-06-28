function addToArray (data, array, callback) {  
  if (!array) {
    return callback(new Error('No existe el array', null));
  }
  setTimeout(function() { 
    array.push(data)
    callback(null, array)
  }, 1000)
}

var array = [1,2,3];

addToArray(4, array, function (err) {  
  if (err) return console.log(err.message)
  console.log(array)
	// (1 seg de delay)-> [1, 2, 3, 4]
})
console.log(array); // [ 1, 2, 3 ]

addToArray(4, array, function (err) {  
  if (err) return console.log(err.message)
  addToArray(5, array, function (err) {
		if (err) return console.log(err.message)
    addToArray(6, array, function (err) {
			if (err) return console.log(err.message)
      addToArray(7, array, function () {
        // Hasta el infinito y más allá...
				console.log(array) // [ 1, 2, 3, 4, 4, 5, 6, 7 ]
      })
    })
  })
});
console.log(array); // [ 1, 2, 3 ]
