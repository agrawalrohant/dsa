// question -->https://www.scaler.com/academy/mentee-dashboard/class/41059/homework/problems/196?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  findMedianSortedArrays: function (A, B) {
    let INT_MAX = Number.MAX_SAFE_INTEGER;
    let INT_MIN = Number.MIN_SAFE_INTEGER;
    let maxNeed = Math.floor((A.length + B.length) / 2);
    let s = 0,
      e = Math.min(A.length, maxNeed),
      totalArraysLength = A.length + B.length;

    while (s <= e) {
      let mid = Math.floor((s + e) / 2);
      let ele = maxNeed - mid;
P
      if (ele > B.length) s = mid + 1;
      else if (
        ele - 1 >= 0 &&
        B.length &&
        mid < A.length &&
        B[ele - 1] > A[mid]
      )
        s = mid + 1;
      else if (
        mid - 1 >= 0 &&
        A.length &&
        ele < B.length &&
        A[mid - 1] > B[ele]
      )
        e = mid - 1;
      else {
        if (totalArraysLength & 1)
          return Math.min(
            mid < A.length ? A[mid] : INT_MAX,
            ele < B.length ? B[ele] : INT_MAX
          ).toFixed(1);
        else {
          let ans =
            Math.min(
              mid < A.length ? A[mid] : INT_MAX,
              ele < B.length ? B[ele] : INT_MAX
            ) +
            Math.max(
              mid - 1 >= 0 && A.length ? A[mid - 1] : INT_MIN,
              ele - 1 >= 0 && B.length ? B[ele - 1] : INT_MIN
            );
          return (ans / 2).toFixed(1);
        }
      }
    }
    return 0;
  },
};
