// question -->  https://www.scaler.com/academy/mentee-dashboard/class/52306/assignment/problems/9246?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (arr) {
    let root = new TriesNode();
    let prefXor = [0];
    let maxBitLength = 0;
    for (let i = 0; i < arr.length; i++) {
      prefXor[i + 1] = prefXor[i] ^ arr[i];
    }
    return findMaxXor(prefXor);

    function findMaxXor(A) {
      let map = new Map();
      let ans = 0;
      let left = 0;
      let right = 0;
      let max = A[0];
      map.set(A[0], 0);
      for (let i = 1; i < A.length; i++) {
        if (A[i] > max) {
          max = A[i];
        }
        map.set(A[i], i);
      }

      while (max != 0) {
        max = max >> 1;
        maxBitLength++;
      }
      for (let i = 0; i < A.length; i++) {
        insert(A[i]);
      }

      for (let i = 0; i < A.length; i++) {
        let maxXOR = search(A[i]);
        let secondIndex = map.get(maxXOR);
        if (ans == (A[i] ^ maxXOR)) {
          let ansLength = right - left + 1;
          let tempLeft = null;
          let tempRight = null;
          if (i < secondIndex) {
            tempLeft = i;
            tempRight = secondIndex;
          } else {
            tempLeft = secondIndex;
            tempRight = i;
          }
          let currLength = tempRight - tempLeft + 1;
          if (currLength < ansLength) {
            if (i < secondIndex) {
              left = i;
              right = secondIndex;
            } else {
              left = secondIndex;
              right = i;
            }
          }
        } else if (ans < (A[i] ^ maxXOR)) {
          ans = A[i] ^ maxXOR;
          if (i < secondIndex) {
            left = i;
            right = secondIndex;
          } else {
            left = secondIndex;
            right = i;
          }
        }
      }
      return [left + 1, right];
    }

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
