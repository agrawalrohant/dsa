// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/homework/problems/194/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  divide: function (A, B) {
    let ans = 0;
    let MAX = 2147483647,
      MIN = -2147483648;
    let sign = (A > 0 && B < 0) || (A < 0 && B > 0) ? -1 : 1;
    let n = Math.abs(A);
    let m = Math.abs(B);
    let max = 1;
    for (let i = 1; i <= 31; i++) {
      max *= 2;
    }

    for (let t = 0, i = 31; i >= 0; i--) {
      if (t + m * max <= n) {
        (t += m * max), (ans += max);
      }
      max /= 2;
    }
    if (sign == -1) {
      ans = -ans;
    }
    if (ans > MAX) {
      return MAX;
    }
    if (ans < MIN) return MAX;
    return ans;
  },
  setBit: function (ans, i) {
    return (1 << i) | ans;
  },
};
