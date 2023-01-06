// question -->https://www.scaler.com/academy/mentee-dashboard/class/52288/homework/problems/4353?navref=cl_tt_nv

module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    let presidence = this.operatorPresidence();
    let stack = [];
    let postFix = "";
    for (let i = 0; i < A.length; i++) {
      if (A[i] >= "a" && A[i] <= "z") {
        // a to z
        postFix = postFix + A[i];
      } else if (A[i] == "(") {
        // (
        stack.push(A[i]);
      } else if (A[i] == ")") {
        // ) -> keep popping & adding to postFix till we get (
        while (stack[stack.length - 1] != "(") {
          postFix = postFix + stack[stack.length - 1];
          stack.pop();
        }
        // remove '(' from stack
        stack.pop();
      } else {
        // operator : ^ / * + -
        let top = stack[stack.length - 1];
        let curr = A[i];
        if (presidence.get(curr) <= presidence.get(top)) {
          // keep popping till curr > top or stack.length = 0
          while (
            presidence.get(curr) <= presidence.get(top) &&
            stack.length > 0
          ) {
            postFix = postFix + stack[stack.length - 1];
            stack.pop();
            top = stack[stack.length - 1];
          }
          stack.push(curr);
        } else {
          stack.push(curr);
        }
      }
    }
    while (stack.length != 0) {
      postFix = postFix + stack[stack.length - 1];
      stack.pop();
    }
    return postFix;
  },
  operatorPresidence: function () {
    let map = new Map();
    map.set("^", 3);
    map.set("/", 2);
    map.set("*", 2);
    map.set("+", 1);
    map.set("-", 1);
    return map;
  },
};
