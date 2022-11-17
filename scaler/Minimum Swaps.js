// question -->https://www.scaler.com/academy/mentee-dashboard/class/41047/homework/problems/4033?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let K = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= B) {
        K++;
      }
    }
    let minSwaps = 0;
    for (let i = 0; i < K; i++) {
      if (A[i] > B) {
        minSwaps++;
      }
    }
    let current = minSwaps;
    for (let end = K; end < A.length; end++) {
      if (A[end] > B) {
        current++;
      }
      if (A[end - K] > B) {
        current--;
      }
      minSwaps = Math.min(minSwaps, current);
    }
    return minSwaps;
  },
};
