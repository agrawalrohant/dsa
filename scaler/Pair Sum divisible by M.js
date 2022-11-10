// question -->https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/4110?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let AmB = [];
    for (let i = 0; i < A.length; i++) {
      AmB.push(A[i] % B);
    }
    let ans = 0;
    let map = new Map();
    for (let i = 0; i < AmB.length; i++) {
      if (map.has(AmB[i])) {
        ans += map.get(AmB[i]);
      }
      if (AmB[i] == 0 && map.has(B)) {
        ans += map.get(B);
      }
      if (map.has(B - AmB[i])) {
        map.set(B - AmB[i], map.get(B - AmB[i]) + 1);
      } else {
        map.set(B - AmB[i], 1);
      }
    }
    return ans % 1000000007;
  },
};
