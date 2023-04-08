// question --> https://www.scaler.com/academy/mentee-dashboard/class/70590/assignment/problems/4974/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of integers
  //param C : array of array of integers
  //param D : integer
  //return an integer
  solve: function (A, B, C, D) {
    let batchQualified = 0;
    let adjList = new Map();
    for (let i = 0; i < C.length; i++) {
      if (adjList.has(C[i][0])) {
        let temp = adjList.get(C[i][0]);
        temp.push(C[i][1]);
        adjList.set(C[i][0], temp);
      } else {
        adjList.set(C[i][0], [C[i][1]]);
      }
      if (adjList.has(C[i][1])) {
        let temp = adjList.get(C[i][1]);
        temp.push(C[i][0]);
        adjList.set(C[i][1], temp);
      } else {
        adjList.set(C[i][1], [C[i][0]]);
      }
    }
    let visitedSet = new Set();
    let currentStrenth = 0;
    let q = new Queue();

    for (let i = 1; i <= A; i++) {
      if (!visitedSet.has(i)) {
        // i is the source
        q.enqueue(i);
        visitedSet.add(i);
        currentStrenth += B[i - 1];
        while (q.front() != null) {
          let curr = q.dequeue();
          let list = adjList.get(curr);
          if (list) {
            for (let j = 0; j < list.length; j++) {
              if (!visitedSet.has(list[j])) {
                q.enqueue(list[j]);
                visitedSet.add(list[j]);
                currentStrenth += B[list[j] - 1];
              }
            }
          }
        }
        if (currentStrenth >= D) {
          batchQualified++;
        }
        currentStrenth = 0;
      }
    }
    return batchQualified;
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
