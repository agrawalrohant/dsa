// question --> https://www.scaler.com/academy/mentee-dashboard/class/41047/assignment/problems/20177/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return a long integers
  solve: function (A) {
    let N = A.length;
    let M = A[0].length;
    let max = 0;
    let suff = [];
    for (let i = 0; i < N; i++) {
      suff.push(new Array(M));
    }
    suff[N - 1][M - 1] = A[N - 1][M - 1];
    max = Math.max(max, suff[N - 1][M - 1]);
    // fill bottom row
    for (let i = M - 2; i >= 0; i--) {
      suff[N - 1][i] = suff[N - 1][i + 1] + A[N - 1][i];
      max = Math.max(max, suff[N - 1][i]);
    }
    // fill last column
    for (let i = N - 2; i >= 0; i--) {
      suff[i][M - 1] = suff[i + 1][M - 1] + A[i][M - 1];
      max = Math.max(max, suff[i][M - 1]);
    }
    // fill the remaing 0,0 to N-2,M-2 matrix
    for (let i = N - 2; i >= 0; i--) {
      for (let j = M - 2; j >= 0; j--) {
        suff[i][j] =
          A[i][j] + suff[i + 1][j] + suff[i][j + 1] - suff[i + 1][j + 1];
        max = Math.max(max, suff[i][j]);
      }
    }
    return max;
  },
};
