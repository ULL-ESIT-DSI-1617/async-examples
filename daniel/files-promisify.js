// usage: promisify(function([args..., cb]) { /* do stuff with args then cb */ })()
const fs = require('fs');

promisify = function(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
};

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
try {
	readFile('README.md').then(data => {
		let promises = [
			writeFile('borrame1.md', data),
			writeFile('borrame2.md', data)
		]
		Promise.all(promises).then(() => {
			let promises = [
				unlink('borrame1.md'),
				unlink('borrame2.md')
			]
			Promise.all(promises).then(() => {
				console.log('Hecho')
			}).catch(err => {
				console.log(err.message);
			})
		}).catch(err => {
			console.log(err.message);
		})
	}).catch(err => {
		console.log(err.message);
	})
}
catch(err) { 
  console.log(err.message);;
}

//const fs = require('fs-extra');
/*
try {
	fs.readFile('README.md').then(data => {
		let promises = [
			fs.writeFile('borrame1.md', data),
			fs.writeFile('borrame2.md', data)
		]
		Promise.all(promises).then(() => {
			let promises = [
				fs.unlink('borrame1.md'),
				fs.unlink('borrame3.md')
			]
			Promise.all(promises).then(() => {
				console.log('Hecho')
			}).catch(err => {
				console.log(err.message);
			})
		}).catch(err => {
			console.log(err.message);
		})
	}).catch(err => {
		console.log(err.message);
	})
}
catch(err) { 
  console.log(err.message);;
}
*/
