// question --> https://www.scaler.com/academy/mentee-dashboard/class/41056/homework/problems/4199?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let min = Number.MAX_SAFE_INTEGER;
    if (B > 0) {
      A.sort((a, b) => a - b);
      for (let i = 0; i < A.length - B + 1; i++) {
        let start = A[i];
        let end = A[i + B - 1];
        min = Math.min(min, end - start);
      }
    }

    if (min == Number.MAX_SAFE_INTEGER) {
      min = 0;
    }
    return min;
  },
};
