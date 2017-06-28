function addToArray (data, array) {  
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function() {
      array.push(data);
      console.log(array);
      resolve(array);
    }, 1000);

    if (!array) {
      reject(new Error('No existe un array'));
    }
  })

  return promise;
}

const array = [1, 2, 3];

async function processData (data, array) {  
  try {
    const result = await addToArray(data, array);
  } catch (err) {
    return console.log(err.message);
  }
}

processData(4, array);  // [1,2,3,4]
processData(5, array);  // [1,2,3,4,5]
processData(6, array);  // [1,2,3,4,5,6]
