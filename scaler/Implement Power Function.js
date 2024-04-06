// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/201?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  power: function (A, B, C) {
    if (A == BigInt(0)) {
      return BigInt(0);
    }
    if (B == BigInt(0) || A == BigInt(1)) {
      return BigInt(1);
    }
    let halfPow = BigInt(this.pow(A, parseInt(B / BigInt(2)), C));
    if (B % BigInt(2) == BigInt(0)) {
      return (halfPow * halfPow) % C;
    } else {
      return (((halfPow * halfPow) % C) * (A % C)) % C;
    }
  },
  pow: function (A, B, C) {
    let ans = Number(this.power(BigInt(A), BigInt(B), BigInt(C)));
    // Never return a negative value
    if (ans < 0) {
      return Number(BigInt(ans) + BigInt(C));
    }
    return ans;
  },
};

// Previous approach which gave TLE
/*pow: function (A, B, C) {
    A = BigInt(A);
    C = BigInt(C);
    let ans = BigInt(1);
    let r = A % C;
    let remain = r;
    for (let i = 0; i < B; i++) {
      ans = ((ans % C) * r) % C;
      r = (ans * r) % C;
    }
    if (ans < 0) {
      return Number(ans + C);
    }
    return Number(ans % C);
  },*/
