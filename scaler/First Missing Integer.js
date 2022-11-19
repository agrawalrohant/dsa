// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/assignment/problems/65?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  firstMissingPositive: function (A) {
    let N = A.length;
    let max = A[0];
    for (let i = 1; i < N; i++) {
      max = Math.max(max, A[i]);
    }
    max = max + 1;
    for (let i = 0; i < N; i++) {
      A[i] = A[i] * max;
    }
    for (let i = 0; i < N; i++) {
      if (A[i] > 0 && (A[parseInt(A[i] / max) - 1] - 1) % max != 0) {
        A[parseInt(A[i] / max) - 1] += 1;
      }
    }
    for (let i = 0; i < N; i++) {
      if (A[i] % max != 1) {
        return i + 1;
      }
    }
    return max;
  },
};
