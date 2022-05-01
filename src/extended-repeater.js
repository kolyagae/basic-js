const { NotImplementedError } = require("../extensions/index.js");

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
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }

  console.log(options.separator);

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  str = String(str);
  options.addition = String(options.addition);

  let additionAndAdditionSeparator = "";

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition !== "undefined") {
      additionAndAdditionSeparator += options.addition;
      if (i < options.additionRepeatTimes - 1) {
        additionAndAdditionSeparator += options.additionSeparator;
      }
    }
  }

  let result = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    result += str + additionAndAdditionSeparator;
    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
