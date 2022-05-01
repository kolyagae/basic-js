const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }
//   let result = arr;

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === "--double-next") {
//       result[i] = result[i + 1];
//     }
//     if (result[i] === "--double-prev") {
//       result[i] = result[i - 1];
//     }
//     if (result[i] === "--discard-prev") {
//       result[i] = "";
//       result[i - 1] = "";
//     }

//     if (result[i] === "--discard-next") {
//       result[i] = "";
//       result[i + 1] = "";
//     }
//   }
//   return result.filter((el) => typeof el === "number");
// }

function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount,
};

module.exports = {
  getCommonCharacterCount,
};
