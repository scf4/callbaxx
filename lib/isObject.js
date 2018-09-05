/**
 * Checks if something is an object
 */

module.exports = function (arg, cb) {
  try {
    cb(null, Object.prototype.toString.call(arg) === '[object Object]');
  } catch (err) {
    cb(err, null);
  }
}