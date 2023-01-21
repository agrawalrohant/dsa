// question --> https://www.scaler.com/academy/mentee-dashboard/class/52290/homework/problems/1157?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    stack = [];
    function top() {
      if (stack.length > 0) {
        return stack[stack.length - 1];
      }
      return null;
    }
    function isEmpty() {
      if (stack.length > 0) {
        return false;
      }
      return true;
    }
    for (let i = 0; i < A.length; i++) {
      while (!isEmpty()) {
        ans = Math.max(ans, A[i] ^ A[top()]);
        if (A[top()] > A[i]) {
          break;
        }
        stack.pop();
      }
      stack.push(i);
    }
    return ans;
  },
};
