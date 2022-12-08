// question -->https://www.scaler.com/academy/mentee-dashboard/class/41050/assignment/problems/19558?navref=cl_tt_lst_nm
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    for (let i = 31; i >= 0; i--) {
      let currentSetCount = 0;
      for (let j = 0; j < A.length; j++) {
        if (this.isSetBit(A[j], i)) {
          currentSetCount++;
        }
      }
      if (currentSetCount >= 2) {
        // set the ith bit in asnwer
        ans = ans | (1 << i);
        // remove all undet bit values in array. Basically eleminate
        for (let j = 0; j < A.length; j++) {
          if (!this.isSetBit(A[j], i)) {
            A[j] = 0;
          }
        }
      }
    }
    return ans;
  },
  isSetBit: function (ans, i) {
    if (((1 << i) & parseInt(ans)) == 0) {
      return false;
    } else {
      return true;
    }
  },
};
