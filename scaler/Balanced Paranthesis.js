// question --> https://www.scaler.com/academy/mentee-dashboard/class/52288/assignment/problems/678/submissions

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      if (stack.length != 0 && this.isPair(stack[stack.length - 1], A[i])) {
        stack.pop();
      } else {
        stack.push(A[i]);
      }
    }
    if (stack.length == 0) {
      return 1;
    } else {
      return 0;
    }
  },
  isPair: function (x, y) {
    if (x == "(" && y == ")") {
      return true;
    } else if (x == "[" && y == "]") {
      return true;
    } else if (x == "{" && y == "}") {
      return true;
    }
    return false;
  },
};
