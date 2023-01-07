// question -->https://www.scaler.com/academy/mentee-dashboard/class/52290/assignment/problems/49?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  largestRectangleArea: function (A) {
    let area = 0;
    let NSL = this.prevSmaller(A);
    let NSR = this.nextSmaller(A);
    for (let i = 0; i < A.length; i++) {
      let width = 0;
      if (NSR[i] == -1 && NSL[i] == -1) {
        width = A.length;
      }
      if (NSR[i] == -1) {
        width = A.length - NSL[i] - 1;
      } else {
        width = NSR[i] - NSL[i] - 1;
      }
      if (width < 0) {
        width = 1;
      }
      area = Math.max(area, width * A[i]);
    }
    return area;
  },
  nextSmaller: function (A) {
    let ans = new Array(A.length);
    let stack = [];
    for (let i = A.length - 1; i >= 0; i--) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr <= A[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans[i] = -1;
      else ans[i] = stack[stack.length - 1];
      stack.push(i);
    }
    return ans;
  },
  prevSmaller: function (A) {
    let ans = [];
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr <= A[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans.push(-1);
      else ans.push(stack[stack.length - 1]);
      stack.push(i);
    }
    return ans;
  },
  isEmpty: function (arr) {
    if (arr.length == 0) return true;
    else return false;
  },
};
