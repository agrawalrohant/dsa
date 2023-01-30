// question --> https://www.scaler.com/academy/mentee-dashboard/class/41059/assignment/problems/203?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  search: function (A, B) {
    let pivotIndex = findPivotIndex(A);
    if (pivotIndex > 0) {
      if (B == A[0]) {
        return 0;
      } else if (B < A[0]) {
        return binarySearch(A, pivotIndex, A.length - 1);
      } else {
        return binarySearch(A, 0, pivotIndex - 1);
      }
    } else {
      return binarySearch(A, 0, A.length - 1);
    }

    function binarySearch(A, s, e) {
      while (s <= e) {
        let mid = parseInt((s + e) / 2);
        if (A[mid] == B) {
          return mid;
        } else if (A[mid] > B) {
          e = mid - 1;
        } else {
          s = mid + 1;
        }
      }
      return -1;
    }
    function findPivotIndex(A) {
      let s = 0;
      let e = A.length;
      let pivot = 0;
      while (s < e) {
        let mid = parseInt((s + e) / 2);
        if (A[mid] >= A[0]) {
          s = mid + 1;
        } else {
          pivot = mid;
          e = mid - 1;
        }
      }
      return pivot;
    }
  },
};
