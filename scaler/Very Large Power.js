// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/homework/problems/1072?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let mod = 1000000007;
    let ans = 1;
    for (let i = 1; i <= +B; i++) {
      ans *= i;
      ans = ans % (mod - 1);
    }
    return this.power(+A, ans, mod);
  },
  mult(a, b, mod) {
    a = BigInt(a);
    b = BigInt(b);
    mod = BigInt(mod);
    return Number((a * b) % mod);
  },
  power: function (A, B, C) {
    if (B == 0) {
      return 1;
    }
    if (B % 2 == 1) {
      // even
      return this.mult(A, this.power(A, B - 1, C), C);
    }
    // odd
    return this.power(this.mult(A, A, C), parseInt(B / 2), C);
  },
};
