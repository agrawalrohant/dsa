// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/homework/problems/71?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  nextPermutation: function (A) {
    let toReplaceIndex = A.length - 1;
    for (let i = A.length - 1; i > 0; i--) {
      if (A[i] < A[i - 1]) {
        toReplaceIndex = i - 1;
      } else {
        toReplaceIndex -= 1;
        break;
      }
    }
    if (toReplaceIndex == 0) {
      return this.reverse(A, 0, A.length - 1);
    } else {
      //find next grater number than A[toReplaceIndex]
      let swapIndex = -1;
      for (let i = toReplaceIndex + 1; i < A.length; i++) {
        if (A[i] < A[toReplaceIndex]) {
          swapIndex = i - 1;
          break;
        }
      }
      if (swapIndex == -1) {
        swapIndex = A.length - 1;
      }
      // swap A[swapIndex] and A[toReplaceIndex]
      let temp = A[swapIndex];
      A[swapIndex] = A[toReplaceIndex];
      A[toReplaceIndex] = temp;
      A = this.reverse(A, toReplaceIndex + 1, A.length - 1);
    }
    return A;
  },
  reverse: function (A, s, e) {
    while (s < e) {
      // swap
      let temp = A[s];
      A[s] = A[e];
      A[e] = temp;
      s++;
      e--;
    }
    return A;
  },
};
