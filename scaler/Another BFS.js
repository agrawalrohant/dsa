// question -->https://www.scaler.com/academy/mentee-dashboard/class/70595/assignment/problems/4707/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //param C : integer
  //param D : integer
  //return an integer
  solve: function (A, B, C, D) {
    if (C == D) {
      return 0;
    }
    // preapre Ajd List
    let adjList = new Map();
    let tempNode = A;[]
    for (let i = 0; i < B.length; i++) {
      if (B[i][2] == 2) {
        // need to split
        tempNode++;
        addToAdjList(B[i][0], tempNode);
        addToAdjList(tempNode, B[i][0]);
        addToAdjList(B[i][1], tempNode);
        addToAdjList(tempNode, B[i][1]);
      } else {
        addToAdjList(B[i][0], B[i][1]);
        addToAdjList(B[i][1], B[i][0]);
      }
    }
    let q = new Queue();
    let visitedSet = new Set();
    q.enqueue(C, 0);
    visitedSet.add(C);
    while (q.front() != null) {
      let curr = q.dequeue();
      let list = adjList.get(curr.value);
      if (list) {
        for (let i = 0; i < list.length; i++) {
          if (list[i] == D) {
            return curr.level + 1;
          }
          if (!visitedSet.has(list[i])) {
            q.enqueue(list[i], curr.level + 1);
            visitedSet.add(list[i]);
          }
        }
      }
    }
    return -1;

    function addToAdjList(key, value) {
      if (adjList.has(key)) {
        let temp = adjList.get(key);
        temp.push(value);
        adjList.set(key, temp);
      } else {
        adjList.set(key, [value]);
      }
    }
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val, level) {
    let n1 = this.getNewNode(val, level);
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
      let val = this.head;
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
  getNewNode(val, level) {
    let newNode = new Node(val, level);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  level;
  constructor(value, level) {
    this.value = value;
    this.level = level;
    this.next = null;
  }
}
