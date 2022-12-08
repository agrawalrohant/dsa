// question --> https://www.scaler.com/academy/mentee-dashboard/class/41050/assignment/problems/9184?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let xor = 0;
    for (let i = 0; i < A.length; i++) {
      xor ^= A[i];
    }
    let setPosition = 0;
    for (let i = 0; i < 32; i++) {
      if (this.isSetBit(xor, i)) {
        setPosition = i;
        break;
      }
    }
    let ans1 = 0;
    let ans2 = 0;
    for (let i = 0; i < A.length; i++) {
      if (this.isSetBit(A[i], setPosition)) {
        ans1 ^= A[i];
      } else {
        ans2 ^= A[i];
      }
    }
    if (ans1 > ans2) {
      return [ans2, ans1];
    } else {
      return [ans1, ans2];
    }
  },
  isSetBit: function (ans, i) {
    if (((1 << i) & parseInt(ans)) == 0) {
      return false;
    } else {
      return true;
    }
  },
};
