const { NotImplementedError } = require("../extensions/index.js");

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
  let result = [];
  if (!Array.isArray(arr)) {
    throw new Error("myError");
  }
  if (arr.length === 0) {
    result = [];
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "--double__next") {
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
      } else if (arr[i] === "--double__prev") {
        if (i > 0) {
          result.push(arr[i - 1]);
        }
      } else if (arr[i] === "--remove__next") {
        if (i < arr.length - 1) {
          i += 1;
        }
      } else if (arr[i] === "--remove__prev") {
        if (i > 0) {
          result.splice([i - 2], 1);
        }
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

module.exports = {
  transform,
};
