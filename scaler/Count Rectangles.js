// question --> https://www.scaler.com/academy/mentee-dashboard/class/41064/assignment/problems/4759?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let set = new Set();
    for (let i = 0; i < A, length; i++) {
      if (!set.has(A[i] + "_" + B[i])) {
        set.add(A[i] + "_" + B[i]);
      }
    }
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        // make sure selected 2 points are not parallel to x or y axis
        if (A[i] != A[j] && B[i] != B[j]) {
          if (set.has(A[i] + "_" + B[j]) && set.has(A[j] + "_" + B[i])) {
            count++;
          }
        }
      }
    }
    return parseInt(count / 2);
  },
};
