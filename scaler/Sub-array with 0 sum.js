// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/assignment/problems/4202?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // create a PS
    let set = new Set();
    let ps = A[0];
    set.add(ps);
    for (let i = 1; i < A.length; i++) {
      ps += A[i];
      if (set.has(ps) || ps == 0) {
        return 1;
      } else {
        set.add(ps);
      }
    }
    return 0;
  },
};
