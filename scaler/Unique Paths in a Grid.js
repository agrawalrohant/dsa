// question --> https://www.scaler.com/academy/mentee-dashboard/class/52320/assignment/problems/8/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return an integer
  uniquePathsWithObstacles: function (A) {
    let N = A.length;
    let M = A[0].length;
    let DP = [];
    for (let i = 0; i < N; i++) {
      let temp = [];
      for (let j = 0; j < M; j++) {
        if (A[i][j] == 1) {
          temp.push(0);
        } else {
          temp.push(-1);
        }
      }
      DP.push(temp);
    }
    if (DP[N - 1][M - 1] == 0 || DP[0][0] == 0) {
      return 0;
    } else {
      DP[N - 1][M - 1] = 1;
    }
    return path(0, 0, N, M);

    // Iterative approach
    function path(i, j, N, M) {
      // last row
      for (let k = M - 2; k >= 0; k--) {
        if (DP[N - 1][k] == 0) {
          DP[N - 1][k] = 0;
        } else if (DP[N - 1][k + 1] == 0) {
          DP[N - 1][k] = 0;
        } else {
          DP[N - 1][k] = 1;
        }
      }

      // last column
      for (let l = N - 2; l >= 0; l--) {
        if (DP[l][M - 1] == 0) {
          DP[l][M - 1] = 0;
        } else if (DP[l + 1][M - 1] == 0) {
          DP[l][M - 1] = 0;
        } else {
          DP[l][M - 1] = 1;
        }
      }

      for (let l = N - 2; l >= 0; l--) {
        for (let k = M - 2; k >= 0; k--) {
          if (DP[l][k] != 0) {
            DP[l][k] = DP[l + 1][k] + DP[l][k + 1];
          }
        }
      }
      return DP[0][0];
    }

    // Recurssive approach
    /*function path(i, j, N, M) {
      if (DP[i][j] == -1) {
        if (i == N - 1 || j == M - 1) {
          DP[i][j] = 1;
        } else {
          DP[i][j] = path(i, j + 1, N, M) + path(i + 1, j, N, M);
        }
      }
      return DP[i][j];
    }*/
  },
};
