// question --> https://www.scaler.com/academy/mentee-dashboard/class/52316/assignment/problems/141?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //return a array of array of integers
  solveNQueens: function (A) {
    let ans = [];
    let matrix = [];
    let colSet = new Set();
    let leftDiag = new Set();
    let rightDiag = new Set();
    for (let i = 0; i < A; i++) {
      let temp = [];
      for (let j = 0; j < A; j++) {
        temp.push(".");
      }
      matrix.push(temp);
    }
    placeQueens(matrix, A, 0);
    ans = reverse(ans, 0, ans.length - 1);
    return ans;

    function reverse(arr, s, e) {
      while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
      }
      return arr;
    }

    function placeQueens(matrix, A, row) {
      if (row == A) {
        let localAns = [];
        for (let i = 0; i < A; i++) {
          let clone = "";
          for (let j = 0; j < A; j++) {
            clone = clone + matrix[i][j];
          }
          localAns.push(clone);
        }
        ans.push(localAns);
        return true;
      }
      for (let col = 0; col < A; col++) {
        if (isSafe2(matrix, row, col)) {
          matrix[row][col] = "Q";
          colSet.add(col);
          leftDiag.add(row - col);
          rightDiag.add(row + col);
          placeQueens(matrix, A, row + 1);
          colSet.delete(col);
          leftDiag.delete(row - col);
          rightDiag.delete(row + col);
          matrix[row][col] = ".";
        }
      }
      return false;
    }

    function isSafe2(matrix, row, col) {
      if (
        colSet.has(col) ||
        leftDiag.has(row - col) ||
        rightDiag.has(row + col)
      ) {
        return false;
      }
      return true;
    }

    /*function isSafe(matrix, row, col) {
      // check column
      for (let i = 0; i < row; i++) {
        if (matrix[i][col] == "Q") {
          return false;
        }
      }

      // check diag up left
      let i = row - 1;
      let j = col - 1;
      while (i >= 0 && j >= 0) {
        if (matrix[i][j] == "Q") {
          return false;
        }
        i--;
        j--;
      }

      // check diag up right
      i = row - 1;
      j = col + 1;
      while (i >= 0 && j < matrix.length) {
        if (matrix[i][j] == "Q") {
          return false;
        }
        i--;
        j++;
      }

      return true;
    }*/
  },
};
