/**
 * * * * * * * * * * * * * 
 *  Nested math example  *
 * * * * * * * * * * * * * 
 * This shows how you can nest several math callbacks together to create more complex calculations
 * Try it out yourself, it's a lot simpler than you'd think!
 */

var add = require('..').add;
var divide = require('..').divide;
var multiply = require('..').multiply;
var modulo = require('..').modulo;
var subtract = require('..').subtract;

function meaningOfLife(cb) {
  add(920, 6, function(err, res) {
    modulo(res, 100, function(err, res) {
      multiply(res, 50, function(err, res) {
        divide(res, 10, function(err, res) {
          add(res, 70, function(err, res) {
            divide(res, 2, function(err, res) {
              subtract(res, 30, function(err, res) {
                divide(res, 2, function(err, res) {
                  add(res, 7, function(err, res) {
                    cb(res);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

meaningOfLife(function(answer) {
  // Can you guess what it is?
  console.log('The meaning of life is ' + answer + '!');
});


