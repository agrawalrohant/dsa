// question --> https://www.scaler.com/academy/mentee-dashboard/class/41056/assignment/problems/164?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let C = new Array(A + B);
    let a = 0;
    let b = 0;
    let c = 0;
    while (a < A.length && b < B.length) {
      if (A[a] < B[b]) {
        C[c] = A[a];
        a++;
      } else {
        C[c] = B[b];
        b++;
      }
      c++;
    }
    while (a < A.length) {
      C[c] = A[a];
      a++;
      c++;
    }
    while (b < B.length) {
      C[c] = B[b];
      b++;
      c++;
    }
    return C;
  },
};
