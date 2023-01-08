// question --> https://www.scaler.com/academy/mentee-dashboard/class/41059/homework/problems/196/submissions

module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  searchMatrix: function (A, B) {
    let startRow = 0;
    let startCol = 0;
    let endRow = A.length - 1;
    let endCol = A[0].length - 1;
    while (startRow + startCol <= endCol + endRow) {
      midRow = parseInt((startRow + endRow) / 2);
      midCol = parseInt((startCol + endCol) / 2);
      let scanElement = A[midRow][midCol];
      if (scanElement == B) {
        return 1;
      } else if (scanElement < B) {
        // reject first half
        if (midCol + 1 > A[0].length - 1) {
          if (midRow == A.length - 1) {
            break;
          }
          startCol = 0;
        } else {
          startCol = midCol + 1;
        }
        if (midRow + 1 > A.length - 1) {
          startRow = midRow;
        } else {
          startRow = midRow + 1;
        }
      } else {
        // reject second half
        if (midCol - 1 < 0) {
          if (midRow == 0) {
            break;
          }
          midCol = A[0].length - 1;
        } else {
          endCol = midCol - 1;
        }
        if (midRow - 1 < 0) {
          endRow = midRow;
        } else {
          endRow = midRow - 1;
        }
      }
    }
    return 0;
  },
};
