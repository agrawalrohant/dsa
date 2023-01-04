// question --> https://www.scaler.com/academy/mentee-dashboard/class/41056/assignment/problems/260?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest: function (A, B) {
    for (let i = 0; i < B; i++) {
      let indexOfSmallest = i;
      let valueOfSmallest = A[i];
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] < valueOfSmallest) {
          valueOfSmallest = A[j];
          indexOfSmallest = j;
        }
      }
      // swap A[i] and A[indexOfSmallest]
      let temp = A[i];
      A[i] = A[indexOfSmallest];
      A[indexOfSmallest] = temp;
    }
    return A[B - 1];
  },
};
