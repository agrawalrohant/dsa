// question --> https://www.scaler.com/academy/mentee-dashboard/class/41059/homework/problems/196/submissions

module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  searchMatrix: function (A, B) {
    sRow = 0;
    eRow = A.length - 1;
    while (sRow <= eRow) {
      let midRow = parseInt((sRow + eRow) / 2);
      if (A[midRow][0] <= B && A[midRow][A[0].length - 1] >= B) {
        return binarySearch(A[midRow], B);
      } else if (A[midRow][0] > B) {
        eRow = midRow - 1;
      } else if (A[midRow][A[0].length - 1] < B) {
        sRow = midRow + 1;
      }
    }
    return 0;
    function binarySearch(arr, target) {
      let s = 0;
      let e = arr.length - 1;
      while (s <= e) {
        let mid = parseInt((s + e) / 2);
        if (arr[mid] == target) {
          return 1;
        } else if (arr[mid] > target) {
          e = mid - 1;
        } else {
          s = mid + 1;
        }
      }
      return 0;
    }
  },
};
