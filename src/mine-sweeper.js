const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(0)
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (i === 0 && j === 0) {
          newMatrix[i][j + 1] += 1;
          newMatrix[i + 1][j + 1] += 1;
          newMatrix[i + 1][j] += 1;
        } else if (i === matrix.length - 1 && j === 0) {
          newMatrix[i - 1][j] += 1;
          newMatrix[i - 1][j + 1] += 1;
          newMatrix[i][j + 1] += 1;
        } else if (i === 0 && j === matrix.length - 1) {
          newMatrix[i + 1][j] += 1;
          newMatrix[i + 1][j - 1] += 1;
          newMatrix[i][j - 1] += 1;
        } else if (i === matrix.length - 1 && j === matrix.length - 1) {
          newMatrix[i][j - 1] += 1;
          newMatrix[i - 1][j - 1] += 1;
          newMatrix[i - 1][j] += 1;
        } else if (i === 0) {
          newMatrix[i][j + 1] += 1;
          newMatrix[i + 1][j + 1] += 1;
          newMatrix[i + 1][j] += 1;
          newMatrix[i + 1][j - 1] += 1;
          newMatrix[i][j - 1] += 1;
        } else if (j === 0) {
          newMatrix[i - 1][j] += 1;
          newMatrix[i - 1][j + 1] += 1;
          newMatrix[i][j + 1] += 1;
          newMatrix[i + 1][j + 1] += 1;
          newMatrix[i + 1][j] += 1;
        } else if (i === matrix.length - 1) {
          newMatrix[i][j - 1] += 1;
          newMatrix[i - 1][j - 1] += 1;
          newMatrix[i - 1][j] += 1;
          newMatrix[i - 1][j + 1] += 1;
          newMatrix[i][j + 1] += 1;
        } else if (j === matrix.length - 1) {
          newMatrix[i][j - 1] += 1;
          newMatrix[i - 1][j - 1] += 1;
          newMatrix[i - 1][j] += 1;
          newMatrix[i + 1][j - 1] += 1;
          newMatrix[i + 1][j] += 1;
        } else {
          newMatrix[i][j - 1] += 1;
          newMatrix[i - 1][j - 1] += 1;
          newMatrix[i - 1][j] += 1;
          newMatrix[i - 1][j + 1] += 1;
          newMatrix[i][j + 1] += 1;
          newMatrix[i + 1][j + 1] += 1;
          newMatrix[i + 1][j] += 1;
          newMatrix[i + 1][j - 1] += 1;
        }
      }
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};