// question -->https://www.scaler.com/academy/mentee-dashboard/class/41062/assignment/problems/9323?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;
    // remove duplicates
    let set = new Set();
    let hasDuplicates = false;
    for (let i = 0; i < A.length; i++) {
      if (!hasDuplicates && set.has(A[i])) {
        hasDuplicates = true;
      }
      set.add(A[i]);
    }
    if (B == 0 && hasDuplicates) {
      return 1;
    }
    A = Array.from(set);
    // sort
    A.sort((a, b) => a - b);
    let j = 0;
    let i = 1;
    while (i < A.length) {
      let diff = A[i] - A[j];
      if (diff == B) {
        count++;
      }
      if (diff > B) {
        j++;
        if (i == j) {
          i++;
        }
      } else {
        i++;
      }
    }
    return count;
  },
};
