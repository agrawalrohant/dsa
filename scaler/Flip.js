// question --> https://www.scaler.com/academy/mentee-dashboard/class/41046/homework/problems/329?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return a array of integers
  flip: function (A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) {
        arr[i] = 1;
      } else {
        arr[i] = -1;
      }
    }
    let ans = arr[0];
    let sum = arr[0];
    let L = 0;
    let R = 0;
    let last0 = -1;
    for (let i = 1; i < arr.length; i++) {
      if (sum < 0) {
        sum = 0;
        last0 = i - 1;
      }
      sum = sum + arr[i];
      // check max
      if (ans < sum) {
        ans = sum;
        R = i;
        L = last0 + 1;
      }
    }
    if (ans < 0) {
      return [];
    }
    return [L + 1, R + 1];
  },
};
