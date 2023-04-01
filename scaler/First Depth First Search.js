// question --> https://www.scaler.com/academy/mentee-dashboard/class/52332/homework/problems/516/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    if (B == C) {
      return 1;
    }
    let N = A.length;
    let adjList = new Map();
    for (let i = 1; i < N; i++) {
      // A[i] -> i+1
      if (adjList.has(A[i])) {
        let temp = adjList.get(A[i]);
        temp.push(i + 1);
        adjList.set(A[i], temp);
      } else {
        adjList.set(A[i], [i + 1]);
      }
    }
    //Source : C to Destination : B exisit?
    let visited = new Set();
    let q = new Queue();
    visited.add(C);
    q.enqueue(C);
    while (q.front() != null) {
      let curr = adjList.get(q.dequeue());
      if (curr) {
        for (let i = 0; i < curr.length; i++) {
          let w = curr[i];
          if (w == B) {
            return 1;
          }
          if (!visited.has(w)) {
            visited.add(w);
            q.enqueue(w);
          }
        }
      }
    }
    return 0;
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
