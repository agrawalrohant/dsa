// question --> https://www.scaler.com/academy/mentee-dashboard/class/41046/assignment/problems/356?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let arr1 = [];
    let arr2 = [];
    let max1, max2, min1, min2;
    max1 = max2 = min1 = min2 = A[0];
    for (let i = 0; i < A.length; i++) {
      arr1[i] = A[i] + i;
      if (arr1[i] > max1) {
        max1 = arr1[i];
      }
      if (arr1[i] < min1) {
        min1 = arr1[i];
      }
      arr2[i] = A[i] - i;
      if (arr2[i] > max2) {
        max2 = arr2[i];
      }
      if (arr2[i] < min2) {
        min2 = arr2[i];
      }
    }
    if (max1 - min1 >= max2 - min2) {
      return max1 - min1;
    } else {
      return max2 - min2;
    }
  },
};
