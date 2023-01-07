// question --> https://www.scaler.com/academy/mentee-dashboard/class/41062/assignment/problems/169?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  maxArea: function (A) {
    let ans = 0;
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
      let min = Math.min(A[i], A[j]);
      let curr = min * (j - i);
      if (curr > ans) {
        ans = curr;
      }
      if (A[i] < A[j]) {
        i++;
      } else {
        j--;
      }
    }
    return ans;
  },
};
