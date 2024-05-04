// question -->https://www.scaler.com/academy/mentee-dashboard/class/52326/assignment/problems/373/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += A[i];
    }
    let k = parseInt(sum / 2);
    let dp = [];
    for (let i = 0; i <= A.length; i++) {
      let dpRow = [];
      for (let j = 0; j <= k; j++) {
        if (i == 0 || j == 0) {
          dpRow.push({ sum: 0, flipRequired: 0 });
        } else {
          dpRow.push({ sum: -1, flipRequired: -1 });
        }
      }
      dp.push(dpRow);
    }

    for (let i = 1; i <= A.length; i++) {
      for (let j = 1; j <= k; j++) {
        if (A[i - 1] > k) {
          dp[i][j] = dp[i - 1][j];
        } else {
          let include = { sum: 0, flipRequired: 0 };
          if (j - A[i - 1] > -1) {
            include = {
              sum: A[i - 1] + dp[i - 1][j - A[i - 1]].sum,
              flipRequired: 1 + dp[i - 1][j - A[i - 1]].flipRequired,
            };
          }
          let exclude = dp[i - 1][j];
          if (include.sum > exclude.sum) {
            dp[i][j] = include;
          } else if (include.sum < exclude.sum) {
            dp[i][j] = exclude;
          } else {
            if (include.flipRequired < exclude.flipRequired) {
              dp[i][j] = include;
            } else {
              dp[i][j] = exclude;
            }
          }
        }
      }
    }
    return dp[A.length][k].flipRequired;
  },
};
