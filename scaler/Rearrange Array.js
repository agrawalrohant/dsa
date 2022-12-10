// question --> https://www.scaler.com/academy/mentee-dashboard/class/41051/assignment/problems/268?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return nothing
  arrange: function (A) {
    let N = A.length;
    // set mised array i.e. New value + Old Value
    for (let i = 0; i < A.length; i++) {
      if (A[i] >= i) {
        A[i] = N * A[i] + A[A[i]];
      } else {
        A[i] = N * A[i] + parseInt(A[A[i]] / N);
      }
    }
    for (let i = 0; i < A.length; i++) {
      A[i] = A[i] % N;
    }
    return A;
  },
};
