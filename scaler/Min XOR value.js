// question -->https://www.scaler.com/academy/mentee-dashboard/class/41050/homework/problems/383?navref=cl_tt_nv
module.exports = {
  //param A : array of integers
  //return an integer
  findMinXor: function (A) {
    let ans = -1;
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 1; i++) {
      let localXor = A[i] ^ A[i + 1];
      if (ans == -1 || ans > localXor) {
        ans = localXor;
      }
    }
    return ans;
  },
};
