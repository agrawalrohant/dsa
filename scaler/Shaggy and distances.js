// question --> https://www.scaler.com/academy/mentee-dashboard/class/41063/assignment/problems/1302?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let minDistance = -1;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      if (map.has(A[i])) {
        let oldPosition = map.get(A[i]);
        let currentDistance = i - oldPosition;
        if (minDistance == -1 || minDistance > currentDistance) {
          minDistance = currentDistance;
        }
        map.set(A[i], i);
      } else {
        map.set(A[i], i);
      }
    }
    return minDistance;
  },
};
