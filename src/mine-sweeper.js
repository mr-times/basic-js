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
  let gameSetup = Array.from(matrix);

  const arr = Array(matrix.length + 2).fill(0).map(() => Array(matrix[0].length + 2).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {

      if (matrix[i][j] === true) {
        arr[i + 1][j + 1] = true;
      } else {
        arr[i + 1][j + 1] = false;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let counter = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      counter = 0;
      if (arr[i + 1][j + 2]) counter += 1;
      console.log(`1 counter ${counter}`);
      if (arr[i + 2][j + 2]) counter += 1;
      console.log(`2 counter ${counter}`);
      if (arr[i + 2][j + 1]) counter += 1;
      console.log(`3 counter ${counter}`);
      if (arr[i + 2][j]) counter += 1;
      console.log(`4 counter ${counter}`);
      if (arr[i + 1][j]) counter += 1;
      console.log(`5 counter ${counter}`);
      if (arr[i][j]) counter += 1;
      console.log(`6 counter ${counter}`);
      if (arr[i][j + 1]) counter += 1;
      console.log(`7 counter ${counter}`);
      if (arr[i][j + 2]) counter += 1;
      console.log(`8 counter ${counter}`);

      console.log(`${i}${j}`);
      gameSetup[i][j] = counter;
    }
  }

return gameSetup;
}

module.exports = {
  minesweeper
};
