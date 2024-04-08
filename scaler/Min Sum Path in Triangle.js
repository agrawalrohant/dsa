// question -->https://www.scaler.com/academy/mentee-dashboard/class/52320/assignment/problems/25/submissions

module.exports = {
  //param A : array of array of integers
  //return an integer
  minimumTotal: function (A) {
    dp = [];
    for (let i = 0; i <= A.length; i++) {
      dp.push([]);
      for (let j = 0; j <= A.length; j++) {
        dp[i].push(-1);
      }
    }
    return this.findMin(0, 0, A, dp);
  },
  findMin: function (i, j, A, dp) {
    if (dp[i][j] == -1) {
      if (i > A.length - 1 || j > A[i].length - 1) {
        return 0;
      }
      dp[i][j] =
        A[i][j] +
        Math.min(
          this.findMin(i + 1, j, A, dp),
          this.findMin(i + 1, j + 1, A, dp)
        );
    }
    return dp[i][j];
  },
};
