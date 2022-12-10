// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/assignment/problems/333?navref=cl_tt_nv
module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (A, B) {
    let ans = [];
    if (B > A.length) {
      return ans;
    }
    let map = new Map();
    for (let i = 0; i < B; i++) {
      if (!map.has(A[i])) {
        map.set(A[i], 1);
      } else {
        map.set(A[i], map.get(A[i]) + 1);
      }
    }
    ans.push(map.size);
    for (let i = B; i < A.length; i++) {
      //set.delete(A[i - B]);
      let toRemoveSize = map.get(A[i - B]);
      if (toRemoveSize == 1) {
        map.delete(A[i - B]);
      } else {
        map.set(A[i - B], map.get(A[i - B]) - 1);
      }
      if (map.has(A[i])) {
        map.set(A[i], map.get(A[i]) + 1);
      } else {
        map.set(A[i], 1);
      }
      ans.push(map.size);
    }
    return ans;
  },
};
