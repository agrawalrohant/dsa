// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/homework/problems/3952?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let N = A.length;
    let curr = 0;
    let max = 0;
    let count = 0;
    for (let i = 0; i < N; i++) {
      if (max < i) return -1;
      max = Math.max(max, A[i] + i);
      if (curr == i && i != N - 1) {
        curr = max;
        count++;
      }
    }
    return count;
  },
};
