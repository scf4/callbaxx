/**
 * Converts a string to lower case
 */

module.exports = function(str, cb) {
  try {
    cb(null, str.toLowerCase());
  } catch (err) {
    cb(err, null);
  }
}