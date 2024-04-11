// question -->https://www.scaler.com/academy/mentee-dashboard/class/52322/homework/problems/279/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  isMatch: function (A, B) {
    let n = A.length;
    let m = B.length;
    if (B == ".*") {
      return 1;
    }
    let uniqueCharInA = new Set();
    for (let i = 0; i < n; i++) {
      uniqueCharInA.add(A[i]);
    }
    if (uniqueCharInA.size == 1) {
      let uniqueCharInB = new Set();
      let char = "";
      for (let i = 0; i < m; i++) {
        if (B[i] != "." && B[i] != "*") {
          uniqueCharInB.add(B[i]);
          if (char == "") {
            char = B[i];
          }
        }
      }
      if (uniqueCharInB.size == 1 && char == A[0]) {
        return 1;
      }
    }
    if (m == 2 && B[m - 1] == "*") {
      let countOfNonStar = 0;
      for (let i = 1; i < n; i++) {
        if (A[i] != A[0]) {
          countOfNonStar++;
        }
      }
      if (countOfNonStar > 0) {
        return 0;
      } else {
        return 1;
      }
    }
    let dp = [];
    for (let i = 0; i <= n; i++) {
      dp.push([]);
      for (let j = 0; j <= m; j++) {
        dp[i].push(0);
      }
    }
    dp[0][0] = 1;
    for (let i = 1; i <= m; i++) {
      if (B[i - 1] == "*") {
        dp[0][i] = 1;
      } else {
        break;
      }
    }
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (A[i - 1] == B[j - 1] || B[j - 1] == ".") {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (B[j - 1] == "*") {
          if (dp[i][j - 2]) {
            dp[i][j] = dp[i][j - 2];
          } else if (B[j - 2] == A[i - 1] || B[j - 2] == ".") {
            dp[i][j] = dp[i - 1][j];
          }
        }
      }
    }
    return dp[n][m];
  },
};
