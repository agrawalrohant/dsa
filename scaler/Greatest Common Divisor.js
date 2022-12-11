// question -->https://www.scaler.com/academy/mentee-dashboard/class/41052/assignment/problems/269?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  gcd: function (A, B) {
    if (B == 0) {
      return A;
    }
    return this.gcd(B, A % B);
  },
};
