// question -->https://www.scaler.com/academy/mentee-dashboard/class/41059/assignment/problems/204?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  searchInsert: function (A, B) {
    let s = 0;
    let e = A.length - 1;
    let ans = A.length;
    while (s <= e) {
      let mid = parseInt((s + e) / 2);
      if (A[mid] == B) {
        return mid;
      } else if (A[mid] < B) {
        s = mid + 1;
      } else {
        e = mid - 1;
        ans = mid;
      }
    }
    return ans;
  },
};
