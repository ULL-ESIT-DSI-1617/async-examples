const superagent = require('superagent');

const NUM_RETRIES = 3;

request('http://google.com/this-throws-an-error', function(error, res) {
  console.log(error.message); // "Not Found"
});

function request(url, callback) {
  _request(url, 0, callback);
}

function _request(url, retriedCount, callback) {
  superagent.get(url).end(function(error, res) {
    if (error) {
      if (retriedCount >= NUM_RETRIES) {
        return callback && callback(error);
      }
      return _request(url, retriedCount + 1, callback);
    }
    callback(res);
  });
}
