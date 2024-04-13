// question --> https://www.scaler.com/academy/mentee-dashboard/class/52326/assignment/problems/9292/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let dp = [];
    for (let i = 0; i <= A.length; i++) {
      dp.push([]);
      for (let j = 0; j <= C; j++) {
        dp[i].push(-1);
      }
    }
    return this.knapscak(B, A, A.length, C, dp);
  },
  knapscak: function (W, V, n, k, dp) {
    if (dp[n][k] == -1) {
      if (n == 0 || k == 0) {
        return 0;
      }
      let ans = this.knapscak(W, V, n - 1, k, dp);
      if (k - W[n - 1] >= 0) {
        ans = Math.max(
          ans,
          V[n - 1] + this.knapscak(W, V, n - 1, k - W[n - 1], dp)
        );
      }
      dp[n][k] = ans;
    }
    return dp[n][k];
  },
};
