// question -->https://www.scaler.com/academy/mentee-dashboard/class/52320/homework/problems/19/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return an integer
  minPathSum: function (A) {
    dp = [];
    for (let i = 0; i <= A.length; i++) {
      dp.push([]);
      for (let j = 0; j <= A[0].length; j++) {
        dp[i].push("");
      }
    }
    return this.minPath(0, 0, A, dp);
  },
  minPath: function (i, j, A, dp) {
    if (dp[i][j] == "") {
      if (
        (i == A.length - 1 && j == A[0].length) ||
        (i == A.length && j == A[0].length - 1)
      ) {
        return 0;
      }
      if (i >= A.length || j >= A[i].length) {
        return Number.MAX_SAFE_INTEGER;
      }
      dp[i][j] =
        A[i][j] +
        Math.min(this.minPath(i + 1, j, A, dp), this.minPath(i, j + 1, A, dp));
    }
    return dp[i][j];
  },
};
