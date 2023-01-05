// question --> https://www.scaler.com/academy/mentee-dashboard/class/41056/assignment/problems/1013?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    A.sort((a, b) => b - a);
    let max = A[1] % A[0];
    for (let i = 2; i < A.length; i++) {
      let curr = A[i] % A[i - 1];
      if (curr > max) {
        max = curr;
      }
    }
    return max;
  },
};
