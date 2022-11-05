// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/assignment/problems/192?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return an integer
  numSetBits: function (A) {
    let count = 0;
    while (A > 0) {
      count = count + ((A & 1) == 1 ? 1 : 0);
      A = A >> 1;
    }
    return count;
  },
  numSetBits2: function (A) {
    // Approach 2
    let count = 0;
    for (let i = 0; i < 32; i++) {
      if ((A & (1 << i)) != 0) {
        count++;
      }
    }
    return count;
  },
};
