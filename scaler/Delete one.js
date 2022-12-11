// question -->https://www.scaler.com/academy/mentee-dashboard/class/41052/assignment/problems/9103?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let prefixGCD = [A[0]];
    for (let i = 1; i < A.length; i++) {
      prefixGCD[i] = this.findGCD(A[i], prefixGCD[i - 1]);
    }
    let suffixGCD = new Array(A.length);
    suffixGCD[A.length - 1] = A[A.length - 1];
    for (let i = A.length - 2; i >= 0; i--) {
      suffixGCD[i] = this.findGCD(A[i], suffixGCD[i + 1]);
    }
    let ans = 0;
    let currentGCD = 0;
    for (let i = 0; i < A.length; i++) {
      if (i - 1 >= 0 && i + 1 < A.length) {
        currentGCD = this.findGCD(prefixGCD[i - 1], suffixGCD[i + 1]);
      } else if (i - 1 >= 0) {
        currentGCD = prefixGCD[i - 1];
      } else {
        currentGCD = suffixGCD[i + 1];
      }
      if (currentGCD > ans) {
        ans = currentGCD;
      }
    }
    return ans;
  },
  findGCD: function (a, b) {
    if (b == 0) {
      return a;
    }
    return this.findGCD(b, a % b);
  },
};
