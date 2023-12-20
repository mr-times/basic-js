const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString(10).split('');
  let buf;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] || i === arr.length - 1) {
      buf = i
      break;
    }
  }
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i !== buf) {
      str += arr[i];
    }
  }
  return Number(str);
}

module.exports = {
  deleteDigit
};
