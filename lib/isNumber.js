/**
 * Adds two numbers together
 */

module.exports = function(arg, cb) {
  cb(null, typeof arg === 'number');
}