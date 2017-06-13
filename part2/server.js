// Derived from https://gist.github.com/Mostafa-Samir/8d88882e223a43bbbdef
var http = require('http');

let processRequest = function(request, response) {
  return () => {
		var request_path = request.url;

		response.writeHead(200, {"Content-Type": "application/json"});

		if(request_path === '/meta/moduleA') {
			 var dataA = JSON.stringify({
					"hasDependency": true,
					"dependency": "moduleB"
			 });
			 response.end(dataA);        
		}
		else if(request_path === '/meta/moduleB') {
			 var dataB = JSON.stringify({
					"hasDependency": true,
					"dependency": "moduleC"
			 });
			 response.end(dataB);
		}
		 else if(request_path === '/meta/moduleC') {
			 var dataC = JSON.stringify({
					"hasDependency": false,
			 });
			 response.end(dataC);
		}
		else {
			 response.end(JSON.stringify({ "err": "NOT FOUND" }));
		} 
	};
};

var server = http.createServer(function(request, response) {
   // simulates a random network delay up to one second
   var randomNetworkDelayFactor = Math.floor(Math.random() * 99) + 1;
   setTimeout(processRequest(request, response), randomNetworkDelayFactor * 10);
});

server.listen(8080);
console.log("The server is running on http://localhost:8080");
