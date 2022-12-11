// question -->https://www.scaler.com/academy/mentee-dashboard/class/41052/homework/problems/358?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  cpFact: function (A, B) {
    let val = this.findGCD(A, B);
    while (val > 1) {
      A = A / val;
      val = this.findGCD(A, B);
    }
    return A;
  },
  findGCD: function (a, b) {
    if (b == 0) {
      return a;
    }
    return this.findGCD(b, a % b);
  },
};
