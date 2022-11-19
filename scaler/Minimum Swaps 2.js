// question -->https://www.scaler.com/academy/mentee-dashboard/class/41047/homework/problems/4048?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let count = 0;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      map.set(A[i], i);
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] != i) {
        let temp = A[i];
        A[i] = A[map.get(i)];
        A[map.get(i)] = temp;
        count++;
        temp = map.get(i);
        map.set(A[i], i);
        map.set(A[temp], temp);
      }
    }
    return count;
  },
};
