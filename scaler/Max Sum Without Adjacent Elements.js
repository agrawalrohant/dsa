// question -->https://www.scaler.com/academy/mentee-dashboard/class/52318/assignment/problems/278/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return an integer
  adjacent: function (A) {
    // Return max sum from 0 to N-1 elements
    let M = A[0].length;
    // Memoization
    let DP = new Array(M);
    // Get Max Sum recurssively
    return callDP(M);

    function callDP(N) {
      if (N <= 0) {
        return 0;
      }
      if (!DP[N]) {
        // Skip the A[N-1] element or pick the A[N-1]
        // if picking, make sure you pick the max of A[0][N - 1] or A[1][N - 1]
        DP[N] = Math.max(
          callDP(N - 1),
          callDP(N - 2) + Math.max(A[0][N - 1], A[1][N - 1])
        );
      }
      return DP[N];
    }
  },
};
