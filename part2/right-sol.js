var http = require('http');

function loadMetaOf(name, list) {

    http.get('http://localhost:8080/meta/' + name, function(response) {
        
        var responseBody = "";  // will hold the response body as it comes
        
        // join the data chuncks as they come
        response.on('data', function(chunck) { responseBody += chunck });
        
        response.on('end', function() {
            
            var jsonResponse = JSON.parse(responseBody);
            list.push(name);
            
            if(jsonResponse.hasDependency) {
                loadMetaOf(jsonResponse.dependency, list)
                .then(function() {
                    deferred.resolve();
                });
            }
            else {
                deferred.resolve();
            }
        });
    });
    
    return promise;
}

var list = [];
loadMetaOf('moduleA', list)
.then(function() {
    // log the details to the user 
    console.log('fetched all metadata for moduleA');
    console.log('all of the following modules need to be loaded');
    console.log(list);
});
