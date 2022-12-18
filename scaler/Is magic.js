// question --> https://www.scaler.com/academy/mentee-dashboard/class/41055/assignment/problems/10359?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    while (A / 10 >= 1) {
      A = this.getSum(A);
    }
    if (A == 1) {
      return 1;
    }
    return 0;
  },
  getSum: function (A) {
    if (A == 0) {
      return 0;
    }
    return this.getSum(parseInt(A / 10)) + (A % 10);
  },
};
