// question --> https://www.scaler.com/academy/mentee-dashboard/class/52318/homework/problems/10/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //return an integer
  numDecodings: function (A) {
    let MOD = 1000000007;
    let DP = new Array(A.length + 1);
    DP.fill(0);
    if (A == "") return 0;
    if (A[0] == "0") return 0;
    DP[0] = 1;
    DP[1] = 1;
    for (let i = 2; i <= A.length; i++) {
      let singleNumber = parseInt(A[i - 1]);
      if (singleNumber > 0 && singleNumber < 10) {
        DP[i] = DP[i - 1];
      }
      let doubleNumber = parseInt(A[i - 1]) + 10 * parseInt(A[i - 2]);
      if (doubleNumber > 9 && doubleNumber < 27) {
        DP[i] = (DP[i] + DP[i - 2]) % MOD;
      }
    }
    return DP[A.length];
  },
};
