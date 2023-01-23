// question --> https://www.scaler.com/academy/mentee-dashboard/class/46495/assignment/problems/145?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return a array of integers
  grayCode: function (A) {
    if (A == 1) {
      return [0, 1];
    }
    let prevPattern = this.grayCode(A - 1);
    let ans = prevPattern;
    for (let i = prevPattern.length - 1; i >= 0; i--) {
      ans.push(this.toggleBit(prevPattern[i], A - 1));
    }
    return ans;
  },
  toggleBit: function (x, i) {
    return x ^ (1 << i);
  },
};
