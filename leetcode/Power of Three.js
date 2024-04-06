// question -->https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 1) {
    return true;
  } else if (n == 0) {
    return false;
  } else {
    if (n % 3 == 0) {
      return isPowerOfThree(parseInt(n / 3));
    } else {
      return false;
    }
  }
};
