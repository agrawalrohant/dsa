// question -->https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/9314/hints?navref=cl_pb_nv_tb

let MOD;
module.exports = {
  solve: function (A, B) {
    MOD = B;
    // Modular inverse of A Modulo B = pw(A, B - 2, B)
    return this.pw(A, B - 2, B);
  },
  pw: function (a, b, m) {
    let res = 1; // Initialize result
    while (b > 0) {
      // If b is odd, multiply a with result
      if (b & 1) res = this.mult(res, a);
      a = this.mult(a, a);
      b >>= 1;
    }
    return res;
  },
  mult: function (a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
      return val % MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
  },
};
