// question --> https://www.scaler.com/academy/mentee-dashboard/class/41062/assignment/problems/4116?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    let ps = [A[0]];
    for (let i = 1; i < A.length; i++) {
      ps[i] = ps[i - 1] + A[i];
      if (ps[i] == B) {
        return A.slice(0, i + 1);
      }
    }
    let i = 0;
    let j = i + 1;
    while (i < j && i < A.length && j < A.length) {
      if (ps[j] - ps[i] == B) {
        return A.slice(i + 1, j + 1);
      } else if (ps[j] - ps[i] < B) {
        j++;
      } else {
        i++;
      }
    }
    return [-1];
  },
};
