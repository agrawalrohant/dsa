// question -->https://www.scaler.com/academy/mentee-dashboard/class/52322/assignment/problems/21?navref=cl_tt_lst_nm

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  minDistance: function (A, B) {
    let DP = [];
    let N = A.length;
    let M = B.length;
    for (let i = 0; i <= N; i++) {
      let temp = [];
      for (let j = 0; j <= M; j++) {
        if (i == 0 || j == 0) {
          temp.push(0);
        } else {
          temp.push(-1);
        }
      }
      DP.push(temp);
    }
    return dist(A, A.length, B, B.length);

    function dist(A, a, B, b) {
      if (a == 0 && b == 0) {
        return 0;
      }
      if (a == 0) {
        return b;
      }
      if (b == 0) {
        return a;
      }
      if (DP[a][b] == -1) {
        if (A[a - 1] == B[b - 1]) {
          DP[a][b] = dist(A, a - 1, B, b - 1);
        } else {
          DP[a][b] = Math.min(
            1 + dist(A, a - 1, B, b),
            1 + dist(A, a - 1, B, b - 1),
            1 + dist(A, a, B, b - 1)
          );
        }
      }
      return DP[a][b];
    }
  },
};
