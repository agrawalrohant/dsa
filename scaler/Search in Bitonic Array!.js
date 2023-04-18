// question -->https://www.scaler.com/academy/mentee-dashboard/class/41060/homework/problems/10901/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let pivot = this.findPivotIndex(A);
    if (B > A[pivot]) {
      return -1;
    } else if (B == A[pivot]) {
      return pivot;
    } else {
      let foundInFirstHalf = this.binarySearch(A, 0, pivot - 1, B);
      if (foundInFirstHalf == -1) {
        let foundInSecodnHalf = this.binarySearch2(
          A,
          pivot + 1,
          A.length - 1,
          B
        );
        if (foundInSecodnHalf == -1) {
          return -1;
        } else {
          return foundInSecodnHalf;
        }
      } else {
        return foundInFirstHalf;
      }
    }
  },
  binarySearch: function (A, s, e, target) {
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (A[mid] == target) {
        return mid;
      } else if (A[mid] > target) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    return -1;
  },
  binarySearch2: function (A, s, e, target) {
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (A[mid] == target) {
        return mid;
      } else if (A[mid] < target) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    return -1;
  },

  findPivotIndex: function (A) {
    let s = 0;
    let e = A.length - 1;
    let ans = 0;
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (
        mid == 0 ||
        mid == A.length - 1 ||
        (A[mid] > A[mid - 1] && A[mid] > A[mid + 1])
      ) {
        return mid;
      } else if (A[mid] > A[mid - 1] && A[mid] < A[mid + 1]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  },
};
