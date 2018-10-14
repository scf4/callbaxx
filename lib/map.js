/**
 * Returns a new array with the results of calling a provided function on each item of the provided array
 * @param {Array} arr - The main array
 * @param {function} mapFn - The function to call on each array item
 * @param {function} cb - The main callback function which receives the new array (or error) 
 * @param {boolean} [mapFnRequiresCallback = false] - Set this to true if mapFn takes a callback, e.g., if it's another callbaxx function
 * @param {...*} additionalArgs - Additional arguments to pass to mapFn
 */

module.exports = function (arr, mapFn, cb, mapFnRequiresCallback = false, ...additionalArgs) {
  require('../lib/isArray')(arr, function (err, res) {
    if (res) {
      var newArr = [];
      // Loop over each item of the array
      for (i = 0; i < arr.length; i++) {
        var item = arr[i];
        // Check if mapFn 
        if (mapFnRequiresCallback) {
          mapFn(item, ...additionalArgs, function (err, res) {
            newArr.push(res);
          });
        } else {
          newArr.push(mapFn(item, ...additionalArgs));
        }
      }
      cb(null, newArr);
    } else {
      cb('You must provide an array to callbaxx.map', null);
    }
  });
}
