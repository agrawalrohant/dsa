// question --> https://www.scaler.com/academy/mentee-dashboard/class/70590/assignment/problems/377/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    let ans = [];
    // prepare Adj List
    let adjList = new Map();
    for (let i = 0; i < B.length; i++) {
      if (adjList.has(B[i])) {
        let temp = adjList.get(B[i]);
        temp.push(C[i]);
        adjList.set(B[i], temp);
      } else {
        adjList.set(B[i], [C[i]]);
      }
    }

    let inDegreeMap = new Map();
    for (let i = 1; i <= A; i++) {
      inDegreeMap.set(i, 0);
    }
    for (let i = 0; i < C.length; i++) {
      inDegreeMap.set(C[i], inDegreeMap.get(C[i]) + 1);
    }

    let q = new Queue();
    for (let i = 1; i <= A; i++) {
      if (inDegreeMap.get(i) == 0) {
        q.enqueue(i);
      }
    }

    while (q.front() != null) {
      let curr = q.dequeue();
      let list = adjList.get(curr);
      if (list) {
        for (let i = 0; i < list.length; i++) {
          inDegreeMap.set(list[i], inDegreeMap.get(list[i]) - 1);
          if (inDegreeMap.get(list[i]) == 0) {
            q.enqueue(list[i]);
          }
        }
      }
      ans.push(curr);
    }

    if (ans.length == A) {
      return 1;
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
