/**
 * Returns a new array with a provided function called on each item of the provided array
 */

var isArray = require('./isArray');

module.exports = function (arr, fn, cb) {
  isArray(arr, function (err, res) {
    if (res) {
      var newArr = [];
      for (i = 0; i < arr.length; i++) {
        var item = fn(arr[i]);
        newArr.push(item);
      }
      cb(null, newArr);
    } else {
      cb('You must provide an array to callbaxx.map', null);
    }
  });
}