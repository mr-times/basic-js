const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { 
 * repeatTimes: 3, 
 * separator: '**', 
 * addition: 'PLUS',
 * additionRepeatTimes: 3, 
 * additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (!(options.addition instanceof String) || !(str instanceof String)) {
    options.addition = String(options.addition);
    str = String(str);
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }


  let output = `${str.concat(options.addition.concat(options.additionSeparator).repeat(options.additionRepeatTimes).concat(options.separator)).repeat(options.repeatTimes)}`;
  output = output.replaceAll(`${options.additionSeparator}${options.separator}`, `${options.separator}`);

  function removeLastOccurrences(str, value) {
    const start = str.lastIndexOf(value);
    const end = str.lastIndexOf(value) + value.length;
    if (start === -1) {
      return str;
    }
    return str.slice(0, start).concat(str.slice(end));
  }
  output = removeLastOccurrences(output, `${options.separator}`);

  return output;
}

module.exports = {
  repeater
};
