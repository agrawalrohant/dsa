// question --> https://www.scaler.com/academy/mentee-dashboard/class/41062/assignment/problems/5097?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
      if (A[i] + A[j] > B) {
        j--;
      } else if (A[i] + A[j] < B) {
        i++;
      } else {
        if (A[i] != A[j]) {
          let freq_i = 0;
          let left = A[i];
          while (A[i] == left) {
            i++;
            freq_i++;
          }
          let freq_j = 0;
          let rigth = A[j];
          while (A[j] == rigth) {
            j--;
            freq_j++;
          }
          count += freq_i * freq_j;
        } else {
          let freq = j - i + 1;
          count += (freq * (freq - 1)) / 2;
          return count % 1000000007;
        }
      }
    }
    return count % 1000000007;
  },
};
