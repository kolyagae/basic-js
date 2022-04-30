const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (
    typeof date.getMonth !== "function" ||
    Object.getOwnPropertyNames(date).length > 0
  ) {
    throw new Error("Invalid date!");
  }

  let currentMonth = date.getMonth();
  let season = "";

  if (currentMonth >= 2 && currentMonth < 5) {
    season = "spring";
  }

  if (currentMonth >= 5 && currentMonth < 8) {
    season = "summer";
  }

  if (currentMonth >= 8 && currentMonth < 11) {
    season = "autumn";
  }

  if (currentMonth <= 1 || currentMonth === 11) {
    season = "winter";
  }
  return season;
}

module.exports = {
  getSeason,
};
