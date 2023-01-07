// question -->https://www.scaler.com/academy/mentee-dashboard/class/52290/homework/problems/263?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return a array of integers
  nextGreater: function (A) {
    let ans = new Array(A.length);
    let stack = [];
    for (let i = A.length - 1; i >= 0; i--) {
      let curr = A[i];
      while (!this.isEmpty(stack) && curr >= stack[stack.length - 1]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) ans[i] = -1;
      else ans[i] = stack[stack.length - 1];
      stack.push(curr);
    }
    return ans;
  },
  isEmpty: function (arr) {
    if (arr.length == 0) return true;
    else return false;
  },
};
