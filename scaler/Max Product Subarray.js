// question -->https://www.scaler.com/academy/mentee-dashboard/class/52318/homework/problems/9/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return an integer
  maxProduct: function (A) {
    let ans = A[0];
    let previousMax = A[0];
    let previousMin = A[0];
    for (let i = 1; i < A.length; i++) {
      let currentMax = Math.max(A[i], A[i] * previousMax, A[i] * previousMin);
      let currentMin = Math.min(A[i], A[i] * previousMax, A[i] * previousMin);
      previousMax = currentMax;
      previousMin = currentMin;
      ans = Math.max(ans, currentMax);
    }
    return ans;
  },
};

/*
// Unoptimized Space Complexity
module.exports = {
  //param A : array of integers
  //return an integer
  maxProduct: function (A) {
    let ans = A[0];
    let DPMax = [A[0]];
    let DPMin = [A[0]];
    for (let i = 1; i < A.length; i++) {
      let currentMax = Math.max(A[i], A[i] * DPMax[i - 1], A[i] * DPMin[i - 1]);
      let currentMin = Math.min(A[i], A[i] * DPMax[i - 1], A[i] * DPMin[i - 1]);
      DPMax[i] = currentMax;
      DPMin[i] = currentMin;
      ans = Math.max(ans, currentMax);
    }
    return ans;
  },
};
*/
