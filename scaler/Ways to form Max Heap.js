// question -->https://www.scaler.com/academy/mentee-dashboard/class/52310/assignment/problems/365/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //return an integer
  arr: [],
  mod: 1000000007,
  solve: function (A) {
    this.arr = [];
    let val = this.ways(A);
    return val;
  },
  ways: function (N) {
    if (this.arr[N]) {
      return this.arr[N];
    }
    // Base condition
    if (N == 0 || N == 1 || N == 2) {
      this.arr[0] = 1;
      this.arr[1] = 1;
      this.arr[2] = 1;
      return 1;
    }
    let H = this.getLog(N);
    let X = (1 << H) - 1;
    let L = (X - 1) / 2 + Math.min(N - X, (X + 1) / 2);
    let R = N - 1 - L;
    let ans = this.mult(
      this.mult(this.combi(N - 1, L, this.mod), this.ways(L)),
      this.ways(R)
    );
    this.arr[N] = ans;
    return ans;
  },
  getLog: function (x) {
    let count = 0;
    while (x != 1) {
      count++;
      x = x >> 1;
    }
    return count;
  },
  combi: function (A, B, C) {
    let arr1 = new Array(A + 1);
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] = new Array(B + 1);
    }
    for (let i = 0; i <= A; i++) {
      for (let j = 0; j <= Math.min(i, B); j++) {
        if (j == 0 || j == i) {
          arr1[i][j] = 1;
        } else {
          arr1[i][j] = ((arr1[i - 1][j - 1] % C) + (arr1[i - 1][j] % C)) % C;
        }
      }
    }
    return arr1[A][B] % C;
  },

  mult: function (a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
      return val % this.mod;
    return Number((BigInt(a) * BigInt(b)) % BigInt(this.mod));
  },
};
