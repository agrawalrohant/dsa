// question --> https://www.scaler.com/academy/mentee-dashboard/class/41053/assignment/problems/3143?navref=cl_tt_nv
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    let spf = this.createSPF();
    for (let i = 0; i < A.length; i++) {
      if (spf[A[i]]) {
        ans++;
      }
    }
    return this.power(2, ans, 1000000007) - 1;
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
  mult(a, b, mod) {
    a = BigInt(a);
    b = BigInt(b);
    mod = BigInt(mod);
    return Number((a * b) % mod);
  },
  isPrime: function (spf, N) {
    if (spf[N] > 2 || N == 1) {
      return false;
    } else {
      return true;
    }
  },
  createSPF: function () {
    let spf = new Array(1000001);
    for (let i = 0; i < spf.length; i++) {
      spf[i] = true;
    }
    spf[0] = false;
    spf[1] = false;
    for (let i = 2; i * i < spf.length; i++) {
      if (spf[i]) {
        for (j = i * i; j < spf.length; j = j + i) {
          spf[j] = false;
        }
      }
    }
    return spf;
  },
};
