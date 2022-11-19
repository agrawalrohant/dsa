// question -->https://www.scaler.com/academy/mentee-dashboard/class/41048/assignment/problems/58?navref=cl_tt_nv

module.exports = {
  /**
   * Interval: [start, end]
   *
   * param A: intervals, a list of Intervals
   * return :a list of Intervals
   */
  solve: function (intervals, new_interval) {
    let ans = [];
    let N = intervals.length;
    let newStart = new_interval[0];
    let newEnd = new_interval[1];
    let i = 0;
    let merge = false;
    while (i < N && newStart >= intervals[i][1] && newEnd >= intervals[i][1]) {
      ans.push([intervals[i][0], intervals[i][1]]);
      i++;
    }
    while (i < N && !merge) {
      if (newEnd < intervals[i][0]) {
        ans.push([newStart, newEnd]);
      } else {
        let start = Math.min(newStart, intervals[i][0]);
        let end = Math.max(newEnd, intervals[i][1]);
        while (
          i < N - 1 &&
          (intervals[i + 1][0] <= end || intervals[i + 1][1] <= end)
        ) {
          // update end
          end = Math.max(intervals[i + 1][1], end);
          i++;
        }
        ans.push([start, end]);
        i++;
      }
      merge = true;
    }
    while (i < N) {
      ans.push([intervals[i][0], intervals[i][1]]);
      i++;
    }
    if (!merge) {
      ans.push([newStart, newEnd]);
    }
    return ans;
  },
};
