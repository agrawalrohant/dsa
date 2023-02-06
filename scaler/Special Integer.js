// question -->https://www.scaler.com/academy/mentee-dashboard/class/41060/assignment/problems/4133?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let s = 0; // ansRangeStart
    let e = A.length; // ansRangeEnd
    let ans = 0;
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (checkSubArrayOfSize(mid)) {
        ans = mid;
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
    return ans;

    function checkSubArrayOfSize(K) {
      let sum = 0;
      for (let i = 0; i < K; i++) {
        sum += A[i];
      }
      if (sum > B) {
        return false;
      }
      // sliding window
      for (let i = K; i < A.length; i++) {
        sum = sum + A[i] - A[i - K];
        if (sum > B) {
          return false;
        }
      }
      return true;
    }
  },
};
