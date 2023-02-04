// question --> https://www.scaler.com/academy/mentee-dashboard/class/52306/assignment/problems/4121?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    let root = new TriesNode();
    let max = A[0];
    for (let i = 1; i < A.length; i++) {
      if (A[i] > max) {
        max = A[i];
      }
    }
    let maxBitLength = 0;
    while (max != 0) {
      max = max >> 1;
      maxBitLength++;
    }
    for (let i = 0; i < A.length; i++) {
      insert(A[i]);
    }

    for (let i = 0; i < A.length; i++) {
      let maxXOR = search(A[i]);
      ans = Math.max(ans, A[i] ^ maxXOR);
    }
    return ans;

    function search(bits) {
      let maxXor = 0;
      let curr = root;
      for (let j = maxBitLength - 1; j >= 0; j--) {
        let bit = (bits & (1 << j)) > 0 ? 0 : 1;
        if (!curr["pointer" + bit]) {
          curr = curr["pointer" + (1 - bit)];
          if (1 - bit) {
            maxXor += 1 << j;
          }
        } else {
          curr = curr["pointer" + bit];
          if (bit) {
            maxXor += 1 << j;
          }
        }
      }
      return maxXor;
    }

    function insert(bits) {
      let curr = root;
      for (let j = maxBitLength - 1; j >= 0; j--) {
        let bit = (bits & (1 << j)) > 0 ? 1 : 0;
        if (!curr["pointer" + bit]) {
          curr["pointer" + bit] = new TriesNode();
        }
        curr = curr["pointer" + bit];
      }
    }
  },
};

class TriesNode {
  pointer1;
  pointer0;
  constructor() {
    this.pointer0 = null;
    this.pointer1 = null;
  }
}
