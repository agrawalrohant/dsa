// question -->https://www.scaler.com/academy/mentee-dashboard/class/41059/assignment/problems/4132?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let N = A.length;
    if (N == 1) {
      return A[0];
    }
    if (A[0] >= A[1]) {
      return A[0];
    }
    if (A[N - 1] >= A[N - 2]) {
      return A[N - 1];
    }
    let s = 1;
    let e = N - 2;
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (A[mid] >= A[mid - 1] && A[mid] >= A[mid + 1]) {
        return A[mid];
      } else if (A[mid - 1] > A[mid]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
  },
};
