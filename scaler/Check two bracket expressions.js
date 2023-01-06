// question -->https://www.scaler.com/academy/mentee-dashboard/class/52288/homework/problems/4218?navref=cl_tt_nv

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    A = this.normalize(A);
    B = this.normalize(B);
    let set = new Set();
    for (let i = 0; i < A.length; i += 2) {
      set.add(A[i] + A[i + 1]);
    }
    for (let i = 0; i < B.length; i += 2) {
      if (set.has(B[i] + B[i + 1])) {
        set.delete(B[i] + B[i + 1]);
      } else {
        return 0;
      }
    }
    if (set.size > 0) {
      return 0;
    }
    return 1;
  },
  normalize: function (A) {
    let stack = [];
    if (A[0] != "-") {
      A = "+" + A;
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] == ")") {
        let currentExp = "";
        while (stack[stack.length - 1] != "(") {
          currentExp = stack[stack.length - 1] + currentExp;
          stack.pop();
        }
        // remove '('
        stack.pop();
        let top = stack[stack.length - 1];
        if (top != "-" && top != "+") {
          top = "+";
        } else {
          stack.pop();
        }
        // check sign
        if (currentExp.length % 2 == 1) {
          currentExp = "+" + currentExp;
        }
        if (top == "-") {
          // reverse the signs
          let updated = "";
          for (let j = 0; j < currentExp.length; j++) {
            if (currentExp[j] == "-") {
              updated = updated + "+";
            } else if (currentExp[j] == "+") {
              updated = updated + "-";
            } else {
              updated = updated + currentExp[j];
            }
          }
          currentExp = updated;
        }

        stack.push(currentExp);
      } else {
        stack.push(A[i]);
      }
    }
    return stack.join("");
  },
};
