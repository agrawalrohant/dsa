// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/assignment/problems/61?navref=cl_tt_lst_nm

module.exports = {
  /**
   * Interval: [start, end]
   *
   * param A: intervals, a list of Intervals
   * return :a list of Intervals
   */
  merge: function (A) {
    A.sort((a, b) => {
        return a[0] - b[0];
    });
    let ans = [];
    let sCurr = A[0][0];
    let eCurr = A[0][1];
    for (let i = 1; i < A.length; i++) {
      if (A[i][0] <= eCurr) {
        // merge
        eCurr = Math.max(eCurr, A[i][1]);
      } else {
        ans.push([sCurr, eCurr]);
        sCurr = A[i][0];
        eCurr = A[i][1];
      }
    }
    ans.push([sCurr, eCurr]);
    return ans;
  },
};
