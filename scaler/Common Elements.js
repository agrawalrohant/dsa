// question -->https://www.scaler.com/academy/mentee-dashboard/class/41064/homework/problems/10203?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let ans = [];
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      map.has(A[i]) ? map.set(A[i], map.get(A[i]) + 1) : map.set(A[i], 1);
    }
    for (let i = 0; i < B.length; i++) {
      if (map.has(B[i])) {
        ans.push(B[i]);
        map.get(B[i]) > 1 ? map.set(B[i], map.get(B[i]) - 1) : map.delete(B[i]);
      }
    }
    return ans;
  },
};
