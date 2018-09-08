/**
 * * * * * * * * * * * * * * * * *
 *   Fibonacci sequence example  *
 * * * * * * * * * * * * * * * * *
 * This is a quick example of how callbacks can benefit your synchronous code
 * It looks different (and slightly more verbose) than ES6 code, but there's less "magic"
 * going on, so you have full control over everything your code is doing.
 */

var add = require('..').add;
var isNumber = require('..').isNumber;

function fibonacci(rounds, cb) {
  // set up fibonacci sequence with two numbers
  var seq = [0, 1];
  // Check 'rounds' arg is a number
  isNumber(rounds, function(err, res) {
    if (!res) {
      console.log('first arg (rounds) must be a number');
    } else {
      // for loop
      for (i = 0; i < rounds; i++) {
        var x = seq[seq.length - 2];
        var y = seq[seq.length - 1];
        // use callbaxx.add to add the numbers together
        add(x, y, function(err, res) {
          // push result to seq array
          seq.push(res);
        });
      }
      // return seq array with out callback
      cb(null, seq);
    }
  });
}

fibonacci(25, function(err, seq) {
  if (err) return console.log(err);
  console.log('Fibonacci sequence is ' + seq.join(' ') + '!');
});
