// question -->https://www.scaler.com/academy/mentee-dashboard/class/41052/homework/problems/2126?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let gcd = (B * C) / this.findGCD(B, C);
    return Math.floor(A / gcd);
  },
  findGCD: function (a, b) {
    if (b == 0) {
      return a;
    }
    return this.findGCD(b, a % b);
  },
};
