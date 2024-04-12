// question -->https://www.scaler.com/academy/mentee-dashboard/class/52322/homework/problems/279/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //return an integer
  anytwo: function (A) {
    let dp = [];
    for (let i = 0; i < A.length; i++) {
      dp.push([]);
      for (let j = 0; j < A.length; j++) {
        dp[i].push(-1);
      }
    }
    let ans = this.findLCS(A, A.length - 1, A, A.length - 1, dp);
    if (ans > 1) {
      return 1;
    } else {
      return 0;
    }
  },
  findLCS: function (A, i, B, j, dp) {
    if (i < 0 || j < 0) {
      return 0;
    }
    if (dp[i][j] == -1) {
      if (i != j) {
        if (A[i] == B[j]) {
          dp[i][j] = 1 + this.findLCS(A, i - 1, B, j - 1, dp);
        } else {
          dp[i][j] = Math.max(
            this.findLCS(A, i - 1, B, j, dp),
            this.findLCS(A, i, B, j - 1, dp)
          );
        }
      } else {
        dp[i][j] = Math.max(
          this.findLCS(A, i - 1, B, j, dp),
          this.findLCS(A, i, B, j - 1, dp)
        );
      }
    }
    return dp[i][j];
  },
};
