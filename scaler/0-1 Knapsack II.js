// question -->https://www.scaler.com/academy/mentee-dashboard/class/52326/homework/problems/9347/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let dp = [];
    for (let i = 0; i < 2; i++) {
      dp.push([]);
      for (let j = 0; j <= C; j++) {
        if (i == 0 || j == 0) {
          dp[i].push(0);
        } else {
          dp[i].push(-1);
        }
      }
    }
    for (let i = 1; i <= A.length; i++) {
      for (let j = 1; j < dp[0].length; j++) {
        let ans = dp[0][j]; // Ignore case
        if (j - B[i - 1] >= 0) {
          ans = Math.max(ans, dp[0][j - B[i - 1]] + A[i - 1]);
        }
        dp[1][j] = ans;
      }
      if (i != A.length) {
        for (let k = 0; k <= C; k++) {
          dp[0][k] = dp[1][k];
          if (k == 0) {
            dp[1][k] = 0;
          } else {
            dp[1][k] = -1;
          }
        }
      }
    }
    return dp[1][C];
  },
};
