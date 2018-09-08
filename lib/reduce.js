/**
 * Smoosh an array into a single value
 */

var isArray = require('./isArray');

module.exports = function (arr, fn, init, cb) {
  isArray(arr, function (err, res) {
    if (res) {
      var result = init
      for (i = 0; i < arr.length; i++) {
        result = fn(result, arr[i], i, arr)
      }
      cb(null, result);
    } else {
      cb('You must provide an array to callbaxx.reduce', null);
    }
  });
}
