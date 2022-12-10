// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/homework/problems/11859?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let ans = 1;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      if (map.has(A[i])) {
        map.set(A[i], map.get(A[i]) + 1);
      } else {
        map.set(A[i], 1);
      }
    }
    let allowedException = 1;
    map.forEach((value, key) => {
      if (value % 2 == 1) {
        if (allowedException) {
          allowedException--;
        } else {
          ans = 0;
        }
      }
    });
    return ans;
  },
};
