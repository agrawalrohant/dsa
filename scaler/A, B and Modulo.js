// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/5840?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let diff = A - B;
    if (B > A) {
      diff = B - A;
    }
    return this.countFactors(diff);
  },
  countFactors: function (N) {
    let max = 1;
    for (let i = 1; i * i <= N; i++) {
      if (N % i == 0) {
        if (i > max) {
          max = i;
        }
        if (N / i > max) {
          max = N / i;
        }
      }
    }
    return max;
  },
};
