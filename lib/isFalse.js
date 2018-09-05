/**
 * Checks if something is equal to false
 */

module.exports = function (arg, cb) {
  cb(null, arg === false);
}