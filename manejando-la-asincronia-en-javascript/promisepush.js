function addToArray (data, array) {  
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
      array.push(data)
      resolve(array)
    }, 1000);

    if (!array) {
      reject(new Error('No existe un array'))
    }
  })

  return promise
}

const array = [1, 2, 3];
addToArray(4, array)  
  .then(function() { return addToArray(5, array) })
  .then(function() { return addToArray(6, array) })
  .then(function() { return addToArray(7, array) })
  .then(function () {
    console.log(array)
  })
 .catch(err => console.log(err.message))

// (4 seg. de delay)-> [1,2,3,4,5,6,7] 

