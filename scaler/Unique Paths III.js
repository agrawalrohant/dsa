// question --> https://www.scaler.com/academy/mentee-dashboard/class/52314/assignment/problems/4176/?navref=cl_pb_nv_tb
module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let startX;
    let startY;
    let countofOpenCells = 1;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] == 1) {
          // starting position
          startX = i;
          startY = j;
        } else if (A[i][j] == 0) {
          countofOpenCells++;
        }
      }
    }
    let ans = 0;
    findPaths(startX, startY, 0);
    return ans;

    function findPaths(x, y, totalCellsVisited) {
      // boundry
      if (x < 0 || y < 0 || x >= A.length || y >= A[0].length) {
        return;
      }
      // obstacles or visited or starting point
      else if (A[x][y] == -1 || A[x][y] == -2) {
        return;
      }
      // Found end
      else if (A[x][y] == 2) {
        //visited all cells
        if (totalCellsVisited == countofOpenCells) ans += 1;
        return;
      } else {
        // visit cell
        totalCellsVisited++;
        A[x][y] = -2;
        findPaths(x - 1, y, totalCellsVisited);
        findPaths(x, y - 1, totalCellsVisited);
        findPaths(x + 1, y, totalCellsVisited);
        findPaths(x, y + 1, totalCellsVisited);
        // backtrack
        totalCellsVisited--;
        A[x][y] = 0;
      }
    }
  },
};
