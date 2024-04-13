// question --> https://www.scaler.com/academy/mentee-dashboard/class/52326/assignment/problems/9340/?navref=cl_pb_nv_tb

https: module.exports = {
  //param A : integer
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    let dp = [];
    for (let i = 0; i <= B.length; i++) {
      dp.push([]);
      for (let j = 0; j <= A; j++) {
        dp[i].push(-1);
      }
    }
    return this.knapsack(C, B, B.length, A, dp);
  },
  knapsack: function (W, V, n, k, dp) {
    if (n == 0 || k == 0) {
      return 0;
    }
    if (dp[n][k] == -1) {
      let ans = this.knapsack(W, V, n - 1, k, dp); // skip
      if (k - W[n - 1] >= 0) {
        ans = Math.max(
          ans,
          V[n - 1] + this.knapsack(W, V, n, k - W[n - 1], dp)
        );
      }
      dp[n][k] = ans;
    }
    return dp[n][k];
  },
};
