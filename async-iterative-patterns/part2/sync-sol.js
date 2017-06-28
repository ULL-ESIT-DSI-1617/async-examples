var request = require('sync-request');
var httpGetSync = (url) => request('GET', url);

function loadMetaOf(name, list) {
    var response = httpGetSync('http://localhost:8080/meta/' + name);
    var jsonResponse = JSON.parse(response.getBody('utf8'));  // we parse the response string as JSON
    list.push(name);  // append the module name to the list logged to the user later
    if(jsonResponse.hasDependency) {
        loadMetaOf(jsonResponse.dependency, list)
        return;  // this is useless, but we need here for our discussion
    }
    else {
        return;  // this is also useless
    }
}

var module = process.argv[2] || 'moduleA';
var list = [];
loadMetaOf(module, list);

// log the details to the user 
console.log('fetched all metadata for moduleA');
console.log('all of the following modules need to be loaded');
console.log(list);
/*
  fetched all metadata for moduleA
  all of the following modules need to be loaded
  [ 'moduleA', 'moduleB', 'moduleC' ]
*/

