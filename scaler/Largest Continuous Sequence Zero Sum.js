// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/assignment/problems/298?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  lszero: function (A) {
    let length = 0;
    let ps = [A[0]];
    let start = -1;
    let end = -1;
    for (let i = 1; i < A.length; i++) {
      ps[i] = ps[i - 1] + A[i];
    }
    let map = new Map();
    for (let i = 0; i < ps.length; i++) {
      if (!map.has(ps[i])) {
        map.set(ps[i], i);
      }
    }
    for (let i = ps.length - 1; i >= 0; i--) {
      if (ps[i] == 0 && length <= i + 1) {
        start = 0;
        end = i;
        length = i + 1;
      }
      if (
        map.has(ps[i]) &&
        map.get(ps[i]) != i &&
        length <= i - map.get(ps[i])
      ) {
        start = map.get(ps[i]) + 1;
        end = i;
        length = i - map.get(ps[i]);
      }
    }
    let ans = [];
    for (let i = start; i <= end; i++) {
      if (i != -1) {
        ans.push(A[i]);
      }
    }
    return ans;
  },
};
