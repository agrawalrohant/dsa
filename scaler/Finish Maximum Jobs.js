// question --> https://www.scaler.com/academy/mentee-dashboard/class/52312/assignment/problems/9291/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let task = [];
    for (let i = 0; i < A.length; i++) {
      task.push(new Task(A[i], B[i]));
    }
    task.sort((a, b) => {
      return a.end - b.end;
    });
    let endTime = null;
    let ans = 0;
    for (let i = 0; i < task.length; i++) {
      if (i == 0) {
        endTime = task[i].end;
        ans++;
      } else {
        if (task[i].start >= endTime) {
          endTime = task[i].end;
          ans++;
        }
      }
    }
    return ans;
  },
};

class Task {
  start;
  end;
  constructor(s, e) {
    this.start = s;
    this.end = e;
  }
}
