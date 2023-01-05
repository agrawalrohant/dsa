module.exports = {
  //param A : array of strings
  //return an integer
  evalRPN: function (A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      if (this.isOperator(A[i])) {
        // pop 2 values
        let op1 = stack[stack.length - 1];
        stack.pop();
        let op2 = stack[stack.length - 1];
        stack.pop();
        stack.push(this.performOperation(op2, op1, A[i]));
      } else {
        stack.push(this.getOperandValue(A[i]));
      }
    }
    return stack[stack.length - 1];
  },
  isOperator: function (str) {
    if (str == "+" || str == "-" || str == "/" || str == "*") {
      return true;
    }
    return false;
  },
  getOperandValue: function (str) {
    return parseInt(str);
  },
  performOperation(op1, op2, perform) {
    switch (perform) {
      case "+":
        return op1 + op2;
        break;
      case "-":
        return op1 - op2;
        break;
      case "/":
        return parseInt(op1 / op2);
        break;
      case "*":
        return op1 * op2;
    }
  },
};
