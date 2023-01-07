// question --> https://www.scaler.com/academy/mentee-dashboard/class/41057/homework/problems/1224?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0;
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] == A[i + 1]) {
        A[i + 1] += 1;
        count += 1;
      } else if (A[i] > A[i + 1]) {
        count += A[i] + 1 - A[i + 1];
        A[i + 1] = A[i] + 1;
      }
    }
    return count;
  },
};

/*  solve: function (A) {
    let ans = 0;
    let set = new Set();
    A.sort((a, b) => a - b);
    for (let i = A.length - 1; i >= 0; i--) {
      if (set.has(A[i])) {
        // duplicate element found. check next available element
        let next = A[i] + 1;
        while (!set.has(next)) {
          next += 1;
        }
        ans = ans + (next - A[i]);
        set.add(next);
      } else {
        set.add(A[i]);
      }
    }
    return ans;
  },*/
