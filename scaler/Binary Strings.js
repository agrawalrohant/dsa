// question --> https://www.scaler.com/academy/mentee-dashboard/class/52312/homework/problems/1074?navref=cl_tt_nv

module.exports = {
  //param A : string
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let answer = 0;
    let xr = 0;
    let temp = new Array(A.length);
    for (let i = 0; i < A.length; i++) {
      temp[i] = 0;
    }
    for (let i = 0; i <= A.length - B; i++) {
      xr = xr ^ temp[i];
      if ((A[i] == "1" && xr == 1) || (A[i] == "0" && xr == 0)) {
        answer++;
        temp[i + B] = 1;
        xr = 1 - xr;
      }
    }
    for (let i = A.length - B + 1; i < A.length; i++) {
      xr = xr ^ temp[i];
      let val = parseInt(A[i]);
      if (val ^ (xr == 0)) {
        return -1;
      }
    }
    return answer;
  },
};
