// question --> https://www.scaler.com/academy/mentee-dashboard/class/52322/assignment/problems/4438/?navref=cl_pb_nv_tb

// Recurrsive Approch
module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    let dp = [];
    for (let i = 0; i < A.length; i++) {
      dp.push([]);
      for (let j = 0; j < B.length; j++) {
        dp[i].push(-1);
      }
    }
    return this.findLCS(A, A.length - 1, B, B.length - 1, dp);
  },
  findLCS: function (A, i, B, j, dp) {
    if (i < 0 || j < 0) {
      return 0;
    }
    if (dp[i][j] == -1) {
      if (A[i] == B[j]) {
        dp[i][j] = 1 + this.findLCS(A, i - 1, B, j - 1, dp);
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

// Iterative Approch
/*module.exports = {
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
};*/
