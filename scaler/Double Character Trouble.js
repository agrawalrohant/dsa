// question --> https://www.scaler.com/academy/mentee-dashboard/class/52288/assignment/problems/968?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      if (stack.length != 0 && stack[stack.length - 1] == A[i]) {
        stack.pop();
      } else {
        stack.push(A[i]);
      }
    }
    return stack.join("");
  },
};
