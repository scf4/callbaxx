/**
 * Checks if something is equal to true
 */

module.exports = function (arg, cb) {
  cb(null, arg === true);
}