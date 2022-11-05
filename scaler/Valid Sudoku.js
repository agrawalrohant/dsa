var rowSets = {};
var colSets = {};
var cellSets = {};

module.exports = {
  //param A : array of strings
  //return an integer
  isValidSudoku: function (A) {
    // create 9 Sets for each of the 3 use cases
    for (let i = 0; i < 9; i++) {
      rowSets[i] = new Set();
      colSets[i] = new Set();
      cellSets[i] = new Set();
    }

    for (let row = 0; row < 9; row++) {
      let r = A[row];
      for (let col = 0; col < 9; col++) {
        let num = r[col];
        if (num == ".") {
          continue;
        }
        // 1. Rows check
        if (rowSets[row].has(num)) {
          return 0;
        } else {
          rowSets[row].add(num);
        }

        // 2. Columns check
        if (colSets[col].has(num)) {
          return 0;
        } else {
          colSets[col].add(num);
        }

        // 3. check 3x3 matrix
        let cell = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        if (cellSets[cell].has(num)) {
          return 0;
        } else {
          cellSets[cell].add(num);
        }
      }
    }
    return 1;
  },
};
