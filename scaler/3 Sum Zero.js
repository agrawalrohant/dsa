// question --> https://www.scaler.com/academy/mentee-dashboard/class/41062/assignment/problems/170?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of array of integers
  threeSum: function (A) {
    let ans = [];
    A.sort((a, b) => a - b);
    for (let a = 0; a < A.length - 2; a++) {
      //A[a]
      if (a != 0 && A[a] == A[a - 1]) {
        continue;
      }
      let b = a + 1;
      let c = A.length - 1;
      while (b < c) {
        let temp = A[b] + A[c];
        if (A[a] == 0 - temp) {
          ans.push([A[a], A[b], A[c]]);
          while (A[c] == A[c - 1]) {
            c--;
          }
          c--;
        } else if (A[a] > 0 - temp) {
          while (A[c] == A[c - 1]) {
            c--;
          }
          c--;
        } else {
          while (A[b] == A[b + 1]) {
            b++;
          }
          b++;
        }
      }
    }
    return ans;
  },
};
