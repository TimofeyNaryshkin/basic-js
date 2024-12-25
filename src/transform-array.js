const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  const control = ['--discard-prev', '--double-prev', '--double-next', '--discard-next'];
  const arrCopy = [...arr];
  if (arr.length === 0 || !arr.some((el) => control.includes(el))) {
    return arr;
  }
  arrCopy.forEach((el, i) => {
    if (el === '--discard-prev') {
      if (i === 0) {
        arrCopy.splice(i, 1);
      } else {
        arrCopy.splice(i - 1, 2);
      }
    } else if (el === '--double-prev') {
      if (i === 0) {
        arrCopy.splice(i, 1);
      } else {
        arrCopy.splice(i, 1, arrCopy[i - 1]);
      }
    } else if (el === '--double-next') {
      if (i === arrCopy.length - 1) {
        arrCopy.splice(i, 1);
      } else {
        arrCopy.splice(i, 1, arrCopy[i + 1]);
      }
    } else if (el === '--discard-next') {
      if (control.includes(arrCopy[i + 2])) {
        arrCopy.splice(i, 3);
      } else {
        arrCopy.splice(i, 2);
      }
    }
  })
  return arrCopy;
}

module.exports = {
  transform
};
