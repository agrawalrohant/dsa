// question -->  https://www.scaler.com/academy/mentee-dashboard/class/41056/assignment/problems/4072?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let smallestEle = A[0];
    let total = A[0];
    for (let i = 1; i < A.length; i++) {
      if (smallestEle > A[i]) {
        smallestEle = A[i];
      }
      total += A[i];
    }
    let expectedTotal = (A.length / 2) * (2 * smallestEle + (A.length - 1));
    if (expectedTotal == total) {
      return 1;
    } else {
      return 0;
    }
  },
};
