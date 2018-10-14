/**
 * Parses a String to a Number either Float or Int
 * @param {String} str - String containing the number
 * @param {function} cb - The main callback function wich receives the number (or error)
 */

module.exports = function(str, cb) {
    try {
        return cb(null, parseFloat(str));
    } catch (err) {
        return cb(err, null);
    }
};