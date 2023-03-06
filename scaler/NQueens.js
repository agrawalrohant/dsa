module.exports = {
  //param A : integer
  //return a array of array of integers
  solveNQueens: function (A) {
    let ans = [];
    let matrix = [];
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
        if (isSafe(matrix, row, col)) {
          matrix[row][col] = "Q";
          if (placeQueens(matrix, A, row + 1)) {
            // dont return . Push array to ans and continue.
            //return true;
          }
          matrix[row][col] = ".";
        }
      }
      return false;
    }

    function isSafe(matrix, row, col) {
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
    }
  },
};
