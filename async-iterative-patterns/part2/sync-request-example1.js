var inspect = require('util').inspect;

var request = require('sync-request');
var res = request('GET', 'http://localhost:8080/meta/moduleA', {
		'headers': {
			'user-agent': 'example-user-agent',
      'Content-Type': 'application/json'
		 }
  });
console.log(inspect(res));
console.log(inspect(res.getBody('utf8')));
