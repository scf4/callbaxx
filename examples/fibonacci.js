/**
 * * * * * * * * * * * * * * * * *
 *   Fibonacci sequence example  *
 * * * * * * * * * * * * * * * * *
 * This is a quick example of how callbacks can benefit your synchronous code
 * It looks different (and slightly more verbose) than ES6 code, but there's less "magic"
 * going on, so you have full control over everything your code is doing.
 */

var add = require('..').add;
var isTrue = require('..').isTrue;
var isNumber = require('..').isNumber;
var isObject = require('..').isObject;

var LIMIT = 1000000;

var STATE = {
  prev: null,
  curr: null,
};

function fibonacci() {
  isNumber(LIMIT, function(err, res) {
    if (!res) {
      console.log('LIMIT is not a number');
    } else if (res) {
      isObject(STATE, function(err2, res2) {
        if (!res2) {
          console.log('STATE is not an object');
        } else if (res2) {
          STATE.prev = 0;
          STATE.curr = 1;
          console.log(STATE.prev);
          console.log(STATE.curr);
          function fibonacciStep() {
            add(STATE.prev, STATE.curr, function(err3, res3) {
              if (err3) {
                console.log(err3);
                return;
              } else if (res3) {
                console.log(res3);
                STATE.prev = STATE.curr;
                STATE.curr = res3;
                isTrue(STATE.curr < LIMIT, function(err4, res4) {
                  if (res4) {
                    fibonacciStep();
                  } else if (!err4) {
                    console.log('Reached fibonacci limit!');
                  } else {
                    console.log(err4);
                  }
                });
              }
            });
          }
          fibonacciStep();
        }
      });
    }
  });
}

fibonacci();
