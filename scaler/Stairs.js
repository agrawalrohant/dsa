// question -->https://www.scaler.com/academy/mentee-dashboard/class/52318/assignment/problems/30/?navref=cl_pb_nv_tb
/*
// Most optimized
module.exports = {
  //param A : integer
  //return an integer
  ansArr: [],
  climbStairs: function (A) {
    let a = 0;
    let b = 1;
    let c = null;
    for (let i = 0; i < A; i++) {
      c = ((a % 1000000007) + (b % 1000000007)) % 1000000007;
      a = b;
      b = c;
    }
    return c;
  },
};*/

// Using DP
module.exports = {
  //param A : integer
  //return an integer
  ansArr: [],
  climbStairs: function (A) {
    this.ansArr = new Array(A + 1).fill(-1);
    return this.getCountForStairs(A) % 1000000007;
  },
  getCountForStairs(A) {
    if (this.ansArr[A] == -1) {
      if (A <= 2) {
        this.ansArr[A] = A;
      } else {
        this.ansArr[A] =
          ((this.getCountForStairs(A - 1) % 1000000007) +
            (this.getCountForStairs(A - 2) % 1000000007)) %
          1000000007;
      }
    }
    return this.ansArr[A];
  },
};
