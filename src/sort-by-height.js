const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArr = [];
  arr = arr.map((el) => {
    if (el !== -1) {
      tempArr.push(el);
      return null;
    }
    return el;
  })
  tempArr.sort((a, b) => a - b);
  arr = arr.map((el) => {
    if (el === null) {
      return tempArr.shift();
    }
    return el;
  })
  return arr;
}

module.exports = {
  sortByHeight
};
