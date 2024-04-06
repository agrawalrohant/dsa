// question --> https://www.scaler.com/academy/mentee-dashboard/class/41055/homework/problems/9307?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    if (A == 0 || A == 1) {
      return 1;
    } else if (A == 2) {
      return 2;
    } else {
      return this.solve(A - 1) + this.solve(A - 2) + this.solve(A - 3) + A;
    }
  },
};
