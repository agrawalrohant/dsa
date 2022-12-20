// question --> https://www.scaler.com/academy/mentee-dashboard/class/46495/assignment/problems/10822?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    return this.kthSymbol(A, B - 1);
  },
  kthSymbol: function (A, B) {
    // base condition
    if (B == 0) {
      return 0;
    }
    // main logic
    let parentVal = this.kthSymbol(A - 1, Math.floor(B / 2));
    if (B % 2 == 0) {
      return parentVal;
    } else {
      return 1 - parentVal;
    }
  },
};
