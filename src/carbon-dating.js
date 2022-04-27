const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str /* sampleActivity */) {
  if (isNaN(str)) {
    return false;
  }
  if (!(typeof str === "string") || str.length == 0) {
    return false;
  }

  let num = Number(str);

  if (num > MODERN_ACTIVITY || num < 1) {
    return false;
  } else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / num) / k;
    return Math.ceil(t);
  }
}

module.exports = {
  dateSample,
};
