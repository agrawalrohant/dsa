// question --> https://www.scaler.com/academy/mentee-dashboard/class/52288/assignment/problems/1064?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    let stack = [];
    for (let i = 0; i < A; i++) {
      if (C[i] == 0) {
        // back pass
        stack.pop();
      } else {
        stack.push(C[i]);
      }
    }
    if (stack.length > 0) {
      return stack[stack.length - 1];
    } else {
      return B;
    }
  },
};
