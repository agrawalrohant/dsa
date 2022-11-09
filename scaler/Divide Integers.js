// question --> https://www.scaler.com/academy/mentee-dashboard/class/41049/homework/problems/194/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  divide: function (A, B) {
    let ans = 0;
    while (A > 0) {
      A = A - B;
      ans++;
    }
    return ans;
  },
};
