// question --> https://www.scaler.com/academy/mentee-dashboard/class/52318/homework/problems/1140/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //pram B : integer
  //param C : integer
  //param D : integer
  //return an integer
  solve: function (A, B, C, D) {
    let preFix = new Array(A.length);
    preFix.fill(0);

    preFix = fillPrefixSum(A, preFix, B);
    preFix = fillPrefixSum(A, preFix, C);
    preFix = fillPrefixSum(A, preFix, D);

    function fillPrefixSum(A, preFix, x) {
      preFix[0] = preFix[0] + A[0] * x;
      for (let i = 1; i < A.length; i++) {
        if (preFix[i - 1] < preFix[i] + A[i] * x) {
          preFix[i] = preFix[i] + A[i] * x;
        } else {
          preFix[i] = preFix[i - 1];
        }
      }
      return preFix;
    }
    return preFix[A.length - 1];
  },
};
