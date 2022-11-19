// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/homework/problems/4099/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let ans = 0;
    for (i = 1; i <= A; i *= 10) {
      ans += parseInt(A / (i * 10)) * i;
      ans += Math.min(Math.max((A % (i * 10)) - i + 1, 0), i);
    }
    return ans;
  },
};
