const fs = require('fs-extra');
const glob = require('glob');

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
				glob('*.md', {}, (file) => { console.log(file); // fs.unlink(file); 
         });
				console.log("borrado: "+err.message);
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

