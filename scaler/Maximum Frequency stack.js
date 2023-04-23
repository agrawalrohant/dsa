// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/homework/problems/4354?navref=cl_tt_lst_nm

module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (A) {
    let freqMap = new Map();
    let stackMap = new Map();
    ans = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i][0] == 1) {
        // push
        if (freqMap.has(A[i][1])) {
          freqMap.set(A[i][1], freqMap.get(A[i][1]) + 1);
        } else {
          freqMap.set(A[i][1], 1);
        }
        let newKey = freqMap.get(A[i][1]);
        if (stackMap.has(newKey)) {
          // push value to stack
          let currStack = stackMap.get(newKey);
          currStack.push(A[i][1]);
          stackMap.set(newKey, currStack);
        } else {
          // push new stack with value
          let currStack = new Stack();
          currStack.push(A[i][1]);
          stackMap.set(newKey, currStack);
        }
        ans.push(-1);
      } else {
        // pop
        let max = stackMap.size;
        let currStack = stackMap.get(max);
        let topEl = currStack.top();
        currStack.pop();
        ans.push(topEl);
        if (currStack.isEmpty()) {
          stackMap.delete(max);
        } else {
          stackMap.set(max, currStack);
        }
        freqMap.set(topEl, freqMap.get(topEl) - 1);
      }
    }
    return ans;
  },
};

class Stack {
    constructor() {
      this.arr = [];
    }
    push(value) {
      this.arr.push(value);
    }
    pop() {
      this.arr.pop();
    }
    peek() {
      let valueToReturn = this.arr[this.arr.length - 1];
      this.arr.pop();
      return valueToReturn;
    }
    top() {
      return this.arr[this.arr.length - 1];
    }
    size() {
      return this.arr.length;
    }
    isEmpty() {
      if (this.arr.length == 0) {
        return true;
      }
      return false;
    }
  }
  