/**
 * Converts a string to upper case
 */

module.exports = function(str, cb) {
  try {
    cb(null, str.toUpperCase());
  } catch (err) {
    cb(err, null);
  }
}