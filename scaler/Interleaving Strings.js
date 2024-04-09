// question -->https://www.scaler.com/academy/mentee-dashboard/class/52322/homework/problems/27/?navref=cl_pb_nv_tb

module.exports = {
  //param A : string
  //param B : string
  //param C : string
  //return an integer
  isInterleave: function (A, B, C) {
    return this.findInterLeave(A, B, C, 0, 0, 0);
  },
  findInterLeave: function (A, B, C, a, b, c) {
    for (let i = c; i < C.length; i++) {
      if (C[i] == B[b] && C[i] == A[a]) {
        // check both possibilties
        return (
          this.findInterLeave(A, B, C, a, b + 1, i + 1) ||
          this.findInterLeave(A, B, C, a + 1, b, i + 1)
        );
      }
      if (C[i] == B[b]) {
        b++;
      } else if (C[i] == A[a]) {
        a++;
      } else {
        return 0;
      }
    }
    if (a == A.length && b == B.length) {
      return 1;
    }
    return 0;
  },
};
