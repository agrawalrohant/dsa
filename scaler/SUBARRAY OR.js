// question --> https://www.scaler.com/academy/mentee-dashboard/class/41050/homework/problems/6604?navref=cl_tt_nv

module.exports = {
  solve: function (A) {
    let ans = 0;
    let n = A.length;
    let subArrayCount = this.totalSubarrays(n);
    for (let bit = 0; bit <= 27; bit++) {
      let zeroes = [];
      for (let i = 0; i < n; i++) {
        if ((A[i] & (1 << bit)) == 0) {
          if (i == 0 || (A[i - 1] & (1 << bit)) != 0) {
            zeroes.push(0);
          }
          zeroes[zeroes.length - 1]++;
        }
      }
      let count = subArrayCount;
      zeroes.forEach((x) => {
        // subtract the total number of subarrays possible from x elements
        count -= this.totalSubarrays(x);
      });
      // add the contribution due to the current bit
      ans = (ans + this.mult(count, 1 << bit)) % this.MOD;
    }
    return ans;
  },
  totalSubarrays: function (n) {
    return (n * (n + 1)) / 2;
  },
  mult: function (a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
      return val % this.MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(this.MOD));
  },
  MOD: 1000000007,
};
