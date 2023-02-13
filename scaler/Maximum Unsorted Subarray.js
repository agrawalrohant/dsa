// question --> https://www.scaler.com/academy/mentee-dashboard/class/41058/homework/problems/359

module.exports = {
  //param A : array of integers
  //return a array of integers
  subUnsort: function (A) {
    let ans = [];
    let i = -1;
    let j = -1;
    let N = A.length;
    for (let k = 1; k < N; k++) {
      if (A[k] < A[k - 1]) {
        i = k - 1;
        break;
      }
    }
    for (let k = N - 2; k >= 0; k--) {
      if (A[k] > A[k + 1]) {
        j = k + 1;
        break;
      }
    }
    if (i == -1 && j == -1) {
      return [-1];
    } else {
      // iterate from i to j, get max and min
      let max = A[i];
      let min = A[i];
      for (let k = i + 1; k <= j; k++) {
        max = Math.max(max, A[k]);
        min = Math.min(min, A[k]);
      }
      for (let k = 0; k < N; k++) {
        if (A[k] > min) {
          ans.push(k);
          break;
        }
      }
      for (let k = N - 1; k >= 0; k--) {
        if (A[k] < max) {
          ans.push(k);
          break;
        }
      }
      return ans;
    }
  },
};
