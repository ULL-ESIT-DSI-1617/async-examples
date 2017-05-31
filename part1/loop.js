var readlineSync = require('readline-sync');
var fs = require('fs');
var result10 = null;


var  repl = function() {
  let m;

		let command = readlineSync.question('> ');
    if (m = command.match(/read\s+(\S+)/)) {
				let path = m[1];
				fs.readFile(path, 'utf8', function(err, data) {
					// here we wait for random time
					setTimeout(function() {
						 result10 = data;
             console.log("async result = "+result10);
						 repl();
					}, Math.floor(Math.random() * 10));
				});
		} else if (command.match(/result/i)) {
      console.log(result10);
      repl();
		} else if (command.match(/bye/i)) {
      console.log(result10);
    }
};

repl();
console.log('Miracle, Outside!!');
