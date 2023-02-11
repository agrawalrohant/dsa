// question -->   https://www.scaler.com/academy/mentee-dashboard/class/52312/homework/problems/290?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  mice: function (A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    let maxMoves = 0;
    for (let i = 0; i < A.length; i++) {
      maxMoves = Math.max(maxMoves, Math.abs(A[i] - B[i]));
    }
    return maxMoves;
  },
};
