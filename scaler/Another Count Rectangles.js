// question --> https://www.scaler.com/academy/mentee-dashboard/class/41062/homework/problems/4115?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;
    let i = 0;
    let j = A.length - 1;
    while (i <= j) {
      if (A[i] * A[j] < B) {
        count += 2 * (j - i + 1) - 1;
        i++;
      } else {
        j--;
      }
    }
    return count % 1000000007;
  },
};
