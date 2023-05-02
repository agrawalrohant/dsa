// question -->https://www.scaler.com/academy/mentee-dashboard/class/52300/homework/problems/4465/?navref=cl_pb_nv_tb

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    let MOD = 1000000000 + 7;
    let aInOrder = new InorderTraversal(A);
    let bInOrder = new InorderTraversal(B);
    let p1 = aInOrder.getNext();
    let p2 = bInOrder.getNext();
    while (p1 != null && p2 != null) {
      if (p1 > p2) {
        p2 = bInOrder.getNext();
      } else if (p1 < p2) {
        p1 = aInOrder.getNext();
      } else {
        ans = ((ans % MOD) + (p1 % MOD)) % MOD;
        p1 = aInOrder.getNext();
        p2 = bInOrder.getNext();
      }
    }
    return ans;
  },
};

class InorderTraversal {
  A = null;
  current = null;
  stack = new Stack();
  constructor(root) {
    this.A = root;
    this.current = this.A;
  }

  getNext() {
    let nextValue = null;
    if (this.current != null || !this.stack.isEmpty()) {
      while (this.current) {
        this.stack.push(this.current);
        this.current = this.current.left;
      }
      this.current = this.stack.peek();
      nextValue = this.current.data;
      this.current = this.current.right;
    }
    return nextValue;
  }
}

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
