// question --> https://www.scaler.com/academy/mentee-dashboard/class/41064/homework/problems/4219?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      let map = new Map();
      for (let j = 0; j < A.length; j++) {
        let slope = "xy";
        if (A[j] - A[i] != 0 && B[j] - B[i] != 0) {
          slope = (B[j] - B[i]) / (A[j] - A[i]);
        } else if (A[j] - A[i] == 0 && B[j] - B[i] == 0) {
          slope = "xy";
          if (i != j) {
            map.has(slope)
              ? map.set(slope, map.get(slope) + 1)
              : map.set(slope, 2);
          }
        } else if (A[j] - A[i] == 0) {
          slope = "y";
        } else if (B[j] - B[i] == 0) {
          slope = "x";
        }
        map.has(slope) ? map.set(slope, map.get(slope) + 1) : map.set(slope, 2);
        ans = Math.max(ans, map.get(slope));
      }
    }
    return ans;
  },
};
