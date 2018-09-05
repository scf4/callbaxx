/**
 * Checks if something is an array
 */

module.exports = function (arg, cb) {
  try {
    cb(null, Object.prototype.toString.call(arg) === '[object Array]');
  } catch (err) {
    cb(err, null);
  }
}