const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      if (count > 1) {
        encodedStr += `${count}${str[i]}`;
      } else {
        encodedStr += `${str[i]}`;
      }
      count = 1;
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
