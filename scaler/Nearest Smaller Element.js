// question -->https://www.scaler.com/academy/mentee-dashboard/class/52290/assignment/problems/332?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  prevSmaller: function (A) {
    let ans = [];
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr <= stack[stack.length - 1]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans.push(-1);
      else ans.push(stack[stack.length - 1]);
      stack.push(curr);
    }
    return ans;
  },
  isEmpty: function (arr) {
    if (arr.length == 0) return true;
    else return false;
  },
};
