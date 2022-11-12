// question --> https://www.scaler.com/academy/mentee-dashboard/class/41046/assignment/problems/56?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  maxSubArray: function (A) {
    let ans = A[0];
    let sum = A[0];
    for (let i = 1; i < A.length; i++) {
      if (sum < 0) {
        sum = 0;
      }
      sum = sum + A[i];
      // check max
      if (ans < sum) {
        ans = sum;
      }
    }
    return ans;
  },
};
