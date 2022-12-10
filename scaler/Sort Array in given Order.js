// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/homework/problems/4808?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    // prepare set of B
    let setB = new Set(B);

    // prepare map of A
    let mapA = new Map();
    for (let i = 0; i < A.length; i++) {
      if (mapA.has(A[i])) {
        mapA.set(A[i], mapA.get(A[i]) + 1);
      } else {
        mapA.set(A[i], 1);
      }
    }

    let ans = [];
    // Fill answer as per B
    for (let i = 0; i < B.length; i++) {
      if (mapA.has(B[i])) {
        while (mapA.get(B[i]) > 0) {
          mapA.set(B[i], mapA.get(B[i]) - 1);
          ans.push(B[i]);
        }
        mapA.delete(B[i]);
      }
    }
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
      if (mapA.has(A[i])) {
        ans.push(A[i]);
        if (mapA.get(A[i]) > 1) {
          mapA.set(A[i], mapA.get(A[i]) - 1);
        } else {
          mapA.delete(A[i]);
        }
      }
    }
    return ans;
  },
};
