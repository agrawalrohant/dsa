module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let dp = [];
    for (let i = 0; i < A.length; i++) {
      dp.push([]);
      for (let j = 0; j < A.length; j++) {
        dp[i].push(-1);
      }
    }
    return this.maxProfit(A, 0, A.length - 1, dp);
  },
  maxProfit: function (wineArray, start, end, dp) {
    if (start > end) {
      return 0;
    }
    if (dp[start][end] == -1) {
      let year = wineArray.length - (end - start + 1) + 1;
      // choose from start
      let ans1 =
        this.maxProfit(wineArray, start + 1, end, dp) + wineArray[start] * year;

      // choose from end
      let ans2 =
        this.maxProfit(wineArray, start, end - 1, dp) + wineArray[end] * year;
      dp[start][end] = Math.max(ans1, ans2);
    }
    return dp[start][end];
  },
};
