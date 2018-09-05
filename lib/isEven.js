/**
 * Checks if a number is even
 */

const isEven = require('is-even');

module.exports = function (arg, cb) {
  cb(null, isEven(arg));
}