// question --> https://www.scaler.com/academy/mentee-dashboard/class/41047/homework/problems/11866?navref=cl_tt_lst_nm

module.exports = {
  solve: function (A, B) {
    let N = A.length;
    for (let row = 0; row < N; row++) {
      for (let col = 1; col < N; col++) {
        A[row][col] = A[row][col] + A[row][col - 1];
      }
    }
    for (let col = 0; col < N; col++) {
      for (let row = 1; row < N; row++) {
        A[row][col] = A[row][col] + A[row - 1][col];
      }
    }
    let max = A[B - 1][B - 1];
    for (let i = B - 1; i < N; i++) {
      for (let j = B - 1; j < N; j++) {
        if (A[i][j - B] && A[i - B] && A[i - B][j]) {
          max = Math.max(
            max,
            A[i][j] - A[i][j - B] - A[i - B][j] + A[i - B][j - B]
          );
        } else if (A[i][j - B]) {
          max = Math.max(max, A[i][j] - A[i][j - B]);
        } else if (A[i - B] && A[i - B][j]) {
          max = Math.max(max, A[i][j] - A[i - B][j]);
        } else {
          max = Math.max(max, A[i][j]);
        }
      }
    }
    return max;
  },

  //ANother idea that didnt fully work - sliding window
  solve1: function (A, B) {
    let n = A.length;
    let max = 0;
    let BxMatrix = [];
    for (let i = 0; i <= n - B; i++) {
      BxMatrix.push(new Array(n - B + 1));
    }

    // matrix 0,0 to B-1,B-1
    for (let row = 0; row < B; row++) {
      for (let col = 0; col < B; col++) {
        max += A[row][col];
      }
    }
    BxMatrix[0][0] = max;

    for (let i = B; i <= n; i++) {
      for (let j = B; j < n; j++) {
        let temp = BxMatrix[i - B][j - B];
        for (let k = 0; k < B; k++) {
          temp = temp + A[k][j] - A[k][j - B];
        }
        BxMatrix[i - B][j - B + 1] = temp;
        max = Math.max(max, BxMatrix[i - B][j - B + 1]);
      }
      if (i < n) {
        let temp = BxMatrix[i - B][0];
        for (let k = 0; k < B; k++) {
          temp = temp + A[i][k] - A[i - B][k];
        }
        BxMatrix[i - B + 1][0] = temp;
        max = Math.max(max, BxMatrix[i - B + 1][0]);
      }
    }
    return max;
  },
};
