const { NotImplementedError } = require("../extensions/index.js");

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
  let arr = str.split("");
  let result = [];
  let count = 1;
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      result.push(count + arr[i]);
      count = 1;
    }
  }
  return result.join("").replace(/[1]/g, "");
}

module.exports = {
  encodeLine,
};
