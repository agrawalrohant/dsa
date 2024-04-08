// question -->https://www.scaler.com/academy/mentee-dashboard/class/52320/assignment/problems/17?navref=cl_tt_nv

module.exports = {
  //param A : array of array of integers
  //return an integer
  calculateMinimumHP: function (A) {
    dp = [];
    let n = A.length;
    let m = A[0].length;
    for (let i = 0; i <= n; i++) {
      dp[i] = [];
      for (let j = 0; j <= m; j++) {
        dp[i][j] = Number.MAX_SAFE_INTEGER;
      }
    }
    dp[n][m - 1] = 1;
    dp[n - 1][m] = 1;
    for (let i = n - 1; i >= 0; i--) {
      for (let j = m - 1; j >= 0; j--) {
        let val = Math.min(dp[i + 1][j], dp[i][j + 1]) - A[i][j];
        if (val <= 0) {
          val = 1;
        }
        dp[i][j] = val;
      }
    }
    return dp[0][0];
  },
};
