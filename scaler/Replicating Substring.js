// question -->https://www.scaler.com/academy/mentee-dashboard/class/41064/assignment/problems/960?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : string
  //return an integer
  solve: function (A, B) {
    let ans = 1;
    let map = new Map();
    for (let i = 0; i < B.length; i++) {
      map.has(B[i]) ? map.set(B[i], map.get(B[i]) + 1) : map.set(B[i], 1);
    }

    map.forEach((value, key) => {
      if (value % A != 0) {
        ans = -1;
      }
    });
    return ans;
  },
};
