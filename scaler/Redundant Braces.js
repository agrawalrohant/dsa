// question -->https://www.scaler.com/academy/mentee-dashboard/class/52288/homework/problems/274?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return an integer
  braces: function (A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      if (
        (A[i] >= "a" && A[i] <= "z") ||
        A[i] == "(" ||
        A[i] == "+" ||
        A[i] == "-" ||
        A[i] == "*" ||
        A[i] == "/"
      ) {
        // a to z
        stack.push(A[i]);
      } else {
        // A[i] == ')'
        let currentExp = "";
        while (stack[stack.length - 1] != "(") {
          currentExp = currentExp + stack[stack.length - 1];
          stack.pop();
        }
        // remove '(' from stack
        stack.pop();
        let operatorCount = 0;
        for (let i = 0; i < currentExp.length; i++) {
          if (
            currentExp[i] == "+" ||
            currentExp[i] == "-" ||
            currentExp[i] == "*" ||
            currentExp[i] == "/"
          ) {
            operatorCount++;
            break;
          }
        }
        if (operatorCount == 0) {
          return 1;
        }
      }
    }
    return 0;
  },
};
