// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/assignment/problems/195?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
      let count = 0;
      for (let j = 0; j < A.length; j++) {
        if (this.checkBit(A[j], i)) {
          count++;
        }
      }
      if (count % 3 != 0) {
        ans = this.setIthBit(ans, i);
      }
    }
    return ans;
  },
  checkBit: function (A, i) {
    return (A & (1 << i)) == 0 ? 0 : 1;
  },
  setIthBit: function (A, i) {
    return A | (1 << i);
  },
};
