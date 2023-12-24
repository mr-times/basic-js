const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the result with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {result}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  let splittedArr = [];
  let result = {};

  for (let i = 0; i < domains.length; i++) {
    splittedArr = domains[i].split('.');

    let item = '';
    for (let j = splittedArr.length - 1; j >= 0; j--) {
      item += '.' + splittedArr[j];

      result[item] = (result[item] || 0) + 1;
    }
  }
  
  return result;
}

module.exports = {
  getDNSStats
};
