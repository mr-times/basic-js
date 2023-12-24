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

/*
function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  } else if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

function sortByHeight(arr) {
  let sortedArr = arr.filter(value => value !== -1);
  sortedArr = sortedArr.sort((a, b) => a - b);
  
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push(arr[i]);
    } else {
      newArr.push(sortedArr[counter]);
      counter++;
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
