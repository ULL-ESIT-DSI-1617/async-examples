var rollDice = function() {
  console.log("rolling");
  return Math.floor(Math.random() * 10) + 1;
}

var rollTillNum = function(num, ms) {
    return new Promise(function(resolve) {
				// The setInterval() method calls a function or evaluates an
				// expression at specified intervals (in milliseconds).
        var interval = setInterval(function(){
            if (rollDice() === num) {
               resolve();
							 // The setInterval() method will continue calling
							 // the function until clearInterval() is called,
               clearInterval(interval);
            }
        }, ms);
    });
}

rollTillNum(7, 100).then(function(){
    console.log("rolled a 7");
});
