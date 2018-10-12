var modulo = require('..').modulo;
var isTrue = require('..').isTrue;

function fizzbuzz(cb) {
  for (var i = 1; i <= 100; i++) {
    modulo(i, 15, function(err, res) {
      isTrue(res === 0, function(err, res) {
        if (res) {
          console.log('FizzBuzz');
        } else {
          modulo(i, 3, function(err, res) {
            isTrue(res === 0, function(err, res) {
              if (res) {
                console.log('Fizz');
              } else {
                modulo(i, 5, function(err, res) {
                  isTrue(res === 0, function(err, res) {
                    if (res) {
                      console.log('Buzz');
                    } else {
                      console.log(i);
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
  }
}

fizzbuzz();
