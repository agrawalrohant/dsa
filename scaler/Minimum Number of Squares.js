// question --> https://www.scaler.com/academy/mentee-dashboard/class/52318/assignment/problems/600/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //return an integer
  countMinSquares: function (A) {
    let DP = new Array(A + 1);
    DP[0] = 0;
    return countMin(A);

    function countMin(A) {
      for (let i = 1; i <= A; i++) {
        DP[i] = i;
        for (let x = 1; x * x <= i; x++) {
          DP[i] = Math.min(DP[i], DP[i - x * x] + 1);
        }
      }
      return DP[A];
    }
  },
};
