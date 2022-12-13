// question -->https://www.scaler.com/academy/mentee-dashboard/class/41064/assignment/problems/4719?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let mapA = new Map();
    let mapB = new Map();
    for (let i = 0; i < A.length; i++) {
      if (mapA.has(A[i])) {
        mapA.set(A[i], mapA.get(A[i]) + 1);
      } else {
        mapA.set(A[i], 1);
      }
      if (mapB.has(B[i])) {
        mapB.set(B[i], mapB.get(B[i]) + 1);
      } else {
        mapB.set(B[i], 1);
      }
    }
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      ans += (mapA.get(A[i]) - 1) * (mapB.get(B[i]) - 1);
    }
    return ans;
  },
};
