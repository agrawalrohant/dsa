// question -->https://www.scaler.com/academy/mentee-dashboard/class/41046/homework/problems/4186?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //param D : array of integers
  //return an integer
  solve: function (A, B, C, D) {
    let ans = 0;
    for (let i = 0; i < 16; i++) {
      let max = -100000000000;
      let min = 100000000000;
      let expression = 0;
      for (let j = 0; j < A.length; j++) {
        expression = A[j];
        if (((1 << 0) & i) == 0) {
          expression = expression + B[j];
        } else {
          expression = expression - B[j];
        }

        if (((1 << 1) & i) == 0) {
          expression = expression + C[j];
        } else {
          expression = expression - C[j];
        }

        if (((1 << 2) & i) == 0) {
          expression = expression + D[j];
        } else {
          expression = expression - D[j];
        }

        if (((1 << 3) & i) == 0) {
          expression = expression + j;
        } else {
          expression = expression - j;
        }

        max = Math.max(max, expression);
        min = Math.min(min, expression);
      }
      ans = Math.max(ans, max - min);
    }
    return ans;
  },
};
