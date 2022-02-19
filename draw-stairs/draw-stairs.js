/**
 * Draw one stair using spaces and asterisks
 * @param {Number} n Numbers of stairsteps
 */
function drawStairs(n) {
  if (typeof n !== "number" || n < 1) {
    throw new TypeError("n has to be a number and equal or greater than one");
  }
  let stair = " ".repeat(n);

  while (stair.includes(" ")) {
    stair = stair.substring(1) + "*";
    console.log(stair);
  }
}

module.exports = drawStairs;
