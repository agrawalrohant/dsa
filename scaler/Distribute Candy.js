// question -->  https://www.scaler.com/academy/mentee-dashboard/class/52312/assignment/problems/3?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  candy: function (A) {
    let ans = 0;
    let CL = [1];
    for (let i = 1; i < A.length; i++) {
      if (A[i] > A[i - 1]) {
        CL[i] = CL[i - 1] + 1;
      } else {
        CL[i] = 1;
      }
    }
    let CR = new Array(A.length);
    CR[A.length - 1] = 1;
    for (let i = A.length - 2; i >= 0; i--) {
      if (A[i] > A[i + 1]) {
        CR[i] = CR[i + 1] + 1;
      } else {
        CR[i] = 1;
      }
    }
    for (let i = 0; i < A.length; i++) {
      ans += Math.max(CL[i], CR[i]);
    }
    return ans;
  },
};
