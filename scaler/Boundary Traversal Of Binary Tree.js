// question --> https://www.scaler.com/academy/mentee-dashboard/class/52296/homework/problems/4860?navref=cl_tt_nv

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  head: null,
  tail: null,
  size: 0,
  result: [],
  stack: [],
  solve: function (A) {
    let ans = [];
    let temp = this.getLeftView(A);
    temp = temp.concat(this.getLeafView(A));
    let right = this.getRightView(A);
    temp = temp.concat(this.reverse(right));
    let set = new Set();
    for (let i = 0; i < temp.length; i++) {
      if (!set.has(temp[i])) {
        ans.push(temp[i]);
        set.add(temp[i]);
      }
    }
    return ans;
  },
  reverse: function (A) {
    let s = 0;
    let e = A.length - 1;
    while (s < e) {
      // swap
      let temp = A[s];
      A[s] = A[e];
      A[e] = temp;
      s++;
      e--;
    }
    return A;
  },
  getLeafView: function (A) {
    if (A == null) {
      return [];
    }
    this.result = [];
    this.stack = [];
    let current = A;
    while (current != null || !this.isEmptyStack()) {
      while (current) {
        this.stack.push(current);
        current = current.left;
      }
      current = this.stack.pop();
      if (current.left == null && current.right == null) {
        this.result.push(current.data);
      }
      current = current.right;
    }
    return this.result;
  },
  push: function (x) {
    this.stack[this.stack.length] = x;
  },
  pop: function () {
    let temp = this.stack[this.stack.length - 1];
    this.stack.pop();
    return temp;
  },
  isEmptyStack: function () {
    if (this.stack.length == 0) return true;
    else return false;
  },
  getRightView: function (A) {
    if (A == null) {
      return [];
    }
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    let ans = [];
    this.enqueue(A);
    while (!this.isEmpty()) {
      let level = null;
      let size = this.size;
      for (let i = 0; i < size; i++) {
        let temp = this.dequeue();
        level = temp.data;
        if (temp.left) this.enqueue(temp.left);
        if (temp.right) this.enqueue(temp.right);
      }
      ans.push(level);
    }
    return ans;
  },
  getLeftView: function (A) {
    if (A == null) {
      return [];
    }
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    let ans = [];
    this.enqueue(A);
    while (!this.isEmpty()) {
      let level = null;
      let size = this.size;
      for (let i = 0; i < size; i++) {
        let temp = this.dequeue();
        if (level == null) {
          level = temp.data;
        }
        if (temp.left) this.enqueue(temp.left);
        if (temp.right) this.enqueue(temp.right);
      }
      ans.push(level);
    }
    return ans;
  },
  isEmpty: function () {
    if (this.head == null) {
      return true;
    }
    return false;
  },
  enqueue: function (val) {
    let n1 = this.getNewQueueNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
    this.size++;
  },
  dequeue: function () {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      if (this.head == null) this.tail = null;
      this.size--;
      return val;
    }
  },
  getNewQueueNode: function (val) {
    let newNode = new QueueNode(val);
    newNode.next = null;
    return newNode;
  },
};
class QueueNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
