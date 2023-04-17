// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/homework/problems/4363?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    let q = new Queue();
    for (let i = 0; i < B; i++) {
      q.enqueue(A[i]);
    }
    // reverse using stack
    let stack = [];
    while (q.front() != null) {
      stack.push(q.dequeue());
    }
    while (stack.length > 0) {
      q.enqueue(stack[stack.length - 1]);
      stack.pop();
    }

    for (let i = 0; i < B; i++) {
      A[i] = q.dequeue();
    }
    return A;
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    let n1 = this.getNewNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
  }
  dequeue() {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = null;
      }
      return val;
    }
  }
  front() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }
  getNewNode(val) {
    let newNode = new Node(val);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
