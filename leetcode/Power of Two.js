// question -->https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  } else if (n == 0) {
    return false;
  } else {
    if (n % 2 == 0) {
      return isPowerOfTwo(parseInt(n / 2));
    } else {
      return false;
    }
  }
};
