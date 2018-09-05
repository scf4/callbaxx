/**
 * Checks if something is a number
 */

module.exports = function(arg, cb) {
  cb(null, typeof arg === 'number');
}