// question -->https://www.scaler.com/academy/mentee-dashboard/class/52322/assignment/problems/16/?navref=cl_pb_nv_tb

// Recurssive Approch
module.exports = {
  //param A : string
  //param B : string
  //return an integer
  isMatch: function (A, B) {
    let m = B.length;
    let countOfStar = 0;
    for (let i = 0; i < m; i++) {
      if (B[i] == "*") {
        countOfStar++;
      }
    }
    if (countOfStar == m) {
      return 1;
    }
    let dp = [];
    for (let i = 0; i <= A.length; i++) {
      dp.push([]);
      for (let j = 0; j <= B.length; j++) {
        dp[i].push(-1);
      }
    }
    return this.findMatch(A, A.length, B, B.length, dp);
  },
  findMatch: function (A, a, B, b, dp) {
    if (dp[a][b] == -1) {
      // base case
      if (a == 0 && b == 0) {
        return 1;
      }
      if (b == 0) {
        return 0;
      }
      if (a == 0) {
        for (let i = b - 1; i >= 0; i--) {
          if (B[i] != "*") {
            return 0;
          }
        }
        return 1;
      }
      // logic for a-z
      if (
        A[a - 1].charCodeAt(0) >= "a".charCodeAt(0) &&
        A[a - 1].charCodeAt(0) <= "z".charCodeAt(0) &&
        B[b - 1].charCodeAt(0) >= "a".charCodeAt(0) &&
        B[b - 1].charCodeAt(0) <= "z".charCodeAt(0)
      ) {
        if (A[a - 1] == B[b - 1]) {
          dp[a][b] = this.findMatch(A, a - 1, B, b - 1, dp);
        } else {
          dp[a][b] = 0;
        }
      }
      // logic for ?
      else if (B[b - 1] == "?") {
        dp[a][b] = this.findMatch(A, a - 1, B, b - 1, dp);
      }
      // logic for *
      else if (B[b - 1] == "*") {
        dp[a][b] =
          this.findMatch(A, a - 1, B, b, dp) ||
          this.findMatch(A, a, B, b - 1, dp);
      }
    }
    return dp[a][b];
  },
};

// Iterative Approch
/*module.exports = {
  //param A : string
  //param B : string
  //return an integer
  isMatch: function (A, B) {
    let n = A.length;
    let m = B.length;
    let countOfStar = 0;
    for (let i = 0; i < m; i++) {
      if (B[i] == "*") {
        countOfStar++;
      }
    }
    if (countOfStar == m) {
      return 1;
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
        if (A[i - 1] == B[j - 1] || B[j - 1] == "?") {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (B[j - 1] == "*") {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
        }
      }
    }
    return dp[n][m];
  },
};*/
