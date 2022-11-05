// question --> https://www.scaler.com/academy/mentee-dashboard/class/36234/homework/problems/4827?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < A.length; i++) {
      sum += A[i];
      if (map.has(sum - B)) {
        count += map.get(sum - B);
      }
      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
    return count;
  },
};
