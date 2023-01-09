// question --> https://www.scaler.com/academy/mentee-dashboard/class/52290/assignment/problems/7042?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of integers
  //return an integer
  NGL: [],
  NGR: [],
  NSL: [],
  NSR: [],
  solve: function (A) {
    let ans = 0;
    this.NGL = this.prevGrater(A);
    this.NGR = this.nextGreater(A);
    this.NSL = this.prevSmaller(A);
    this.NSR = this.nextSmaller(A);
    for (let i = 0; i < A.length; i++) {
      let max = this.getMaxAppearanceOf(i, A);
      let min = this.getMinAppearanceOf(i, A);
      ans += (max - min) * A[i];
    }
    return ans % 1000000007;
  },
  getMaxAppearanceOf: function (i, A) {
    let end = this.NGR[i];
    if (end < 0) {
      end = A.length;
    }
    return (i - this.NGL[i]) * (end - i);
  },
  getMinAppearanceOf(i, A) {
    let end = this.NSR[i];
    if (end < 0) {
      end = A.length;
    }
    return (i - this.NSL[i]) * (end - i);
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
  prevGrater: function (A) {
    let ans = [];
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr >= A[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans.push(-1);
      else ans.push(stack[stack.length - 1]);
      stack.push(i);
    }
    return ans;
  },
  nextGreater: function (A) {
    let ans = new Array(A.length);
    let stack = [];
    for (let i = A.length - 1; i >= 0; i--) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr >= A[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans[i] = -1;
      else ans[i] = stack[stack.length - 1];
      stack.push(i);
    }
    return ans;
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
  isEmpty: function (arr) {
    if (arr.length == 0) return true;
    else return false;
  },
};
