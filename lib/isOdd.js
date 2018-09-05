/**
 * Checks if a number is odd
 */

const isOdd = require('is-odd');

module.exports = function (arg, cb) {
  cb(null, isOdd(arg));
}