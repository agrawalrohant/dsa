// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/homework/problems/330?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  cntBits: function (A) {
    let count = 0;
    for (let i = 0; i < 32; i++) {
      let totalSet = 0;
      for (let j = 0; j < A.length; j++) {
        totalSet += this.checkSetBit(A[j], i);
      }
      let totalUnset = A.length - totalSet;
      count += totalSet * totalUnset;
    }
    return count * 2;
  },
  checkSetBit: function (x, i) {
    if (((x >> i) & 1) == 1) {
      return 1;
    } else {
      return 0;
    }
  },
  countSetBit: function (x) {
    let count = 0;
    while (x > 0) {
      // check
      if ((x & 1) == 1) {
        count++;
      }
      // right shift
      x = x >> 1;
    }
    return count;
  },
};
