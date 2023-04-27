// question -->https://www.scaler.com/academy/mentee-dashboard/class/52298/homework/problems/4258/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //return a strings
  solve: function (A) {
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < A.length; i++) {
      if (A[i] > A[i - 1]) {
        // RST
        if (A[i] > min && A[i] < max) {
          min = Math.max(A[i - 1], min);
        }else{
          return "NO";
        }
      } else {
        // LST
        if (A[i] > min && A[i] < max) {
          max = Math.min(A[i - 1], max);
        } else {
          return "NO";
        }
      }
    }
    return "YES";
  },
};
