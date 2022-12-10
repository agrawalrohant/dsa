// question -->https://www.scaler.com/academy/mentee-dashboard/class/41063/assignment/problems/152?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  longestConsecutive: function (A) {
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
      if (!set.has(A[i])) {
        set.add(A[i]);
      }
    }
    let ans = 0;
    set.forEach((element) => {
      let length = 1;
      let K = 1;
      if (!set.has(element - 1)) {
        while (set.has(element + K)) {
          length++;
          K++;
        }
        ans = Math.max(ans, length);
      }
    });
  },
};
