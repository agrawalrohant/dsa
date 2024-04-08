// question -->https://www.scaler.com/academy/mentee-dashboard/class/52320/assignment/problems/368/submissions

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  dp: [],
  NDigitNumbers: function (digit, sum) {
    if (sum < 0) {
      return 0;
    }
    if (digit == 0 && sum == 0) {
      return 1;
    }
    if (digit == 0) {
      return 0;
    }
    if (this.dp[digit][sum] == -1) {
      let currentSum = 0;
      for (let i = 0; i <= 9; i++) {
        if (sum - i >= 0) {
          currentSum += this.NDigitNumbers(digit - 1, sum - i);
          currentSum = currentSum % this.MOD;
        }
        this.dp[digit][sum] = currentSum;
      }
    }
    return this.dp[digit][sum];
  },
  MOD: 1000000007,
  solve: function (A, B) {
    // prepare the dp array
    for (let i = 0; i <= A; i++) {
      this.dp[i] = [];
      for (let j = 0; j <= B; j++) {
        this.dp[i][j] = -1;
      }
    }
    let currentSum = 0;
    // Do 1st iteration for 1st digit.
    for (let i = 1; i <= 9; i++) {
      if (B - i >= 0) {
        currentSum += this.NDigitNumbers(A - 1, B - i);
        currentSum = currentSum % this.MOD;
      }
    }
    return currentSum;
  },
};
