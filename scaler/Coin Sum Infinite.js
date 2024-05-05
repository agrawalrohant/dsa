// question --> https://www.scaler.com/academy/mentee-dashboard/class/52326/homework/problems/319/submissions

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  coinchange2: function (A, B) {
    let MOD = 1000007;
    let dp = [];
    for (let i = 0; i <= A.length; i++) {
      let dpRow = [];
      for (let j = 0; j <= B; j++) {
        if (j == 0) {
          dpRow.push(1);
        } else {
          dpRow.push(0);
        }
      }
      dp.push(dpRow);
    }
    for (let i = 1; i <= A.length; i++) {
      for (let j = 1; j <= B; j++) {
        if (j - A[i - 1] > -1) {
          dp[i][j] = (dp[i - 1][j] + dp[i][j - A[i - 1]]) % MOD;
        } else {
          dp[i][j] = dp[i - 1][j] % MOD;
        }
      }
    }
    return dp[A.length][B];
  },
};
