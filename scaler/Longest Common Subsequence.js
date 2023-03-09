// question --> https://www.scaler.com/academy/mentee-dashboard/class/52322/assignment/problems/4438/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    let DP = [];
    let N = A.length;
    let M = B.length;
    for (let i = 0; i <= N; i++) {
      let temp = [];
      for (let j = 0; j <= M; j++) {
        if (i == 0 || j == 0) {
          temp.push(0);
        } else {
          temp.push(-1);
        }
      }
      DP.push(temp);
    }

    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        if (A[i - 1] == B[j - 1]) {
          DP[i][j] = 1 + DP[i - 1][j - 1];
        } else {
          DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
        }
      }
    }
    return DP[N][M];
  },
};
