// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/201?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  pow: function (A, B, C) {
    let ans = Number(this.power(BigInt(A), BigInt(B), BigInt(C)));
    if (ans < 0) {
      return ans + C;
    } else {
      return ans;
    }
  },
  power: function (A, B, C) {
    if (BigInt(B) == 0 && C == BigInt(1)) {
      return BigInt(0);
    }
    if (BigInt(B) == 0 || A == BigInt(1)) {
      return BigInt(1);
    }
    let halfPower = this.power(A, BigInt(Math.floor(Number(B / BigInt(2)))), C);
    if (B % BigInt(2) == 0) {
      return ((halfPower % C) * (halfPower % C)) % C;
    } else {
      return ((halfPower % C) * (halfPower % C) * (A % C)) % C;
    }
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
