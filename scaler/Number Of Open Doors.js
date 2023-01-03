// question --> https://www.scaler.com/academy/mentee-dashboard/class/41053/homework/problems/4106?navref=cl_tt_nv
module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let s = 1;
    let e = A;
    let ans = 0;
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (mid * mid == A) {
        return mid;
      } else if (mid * mid > A) {
        e = mid - 1;
      } else {
        s = mid + 1;
        ans = mid;
      }
    }
    return ans;
  },
};
