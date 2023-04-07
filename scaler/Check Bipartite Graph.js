// question --> https://www.scaler.com/academy/mentee-dashboard/class/70585/assignment/problems/4811/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    // prepare Adj List
    let adjList = new Map();
    for (let i = 0; i < B.length; i++) {
      if (adjList.has(B[i][0])) {
        let temp = adjList.get(B[i][0]);
        temp.push(B[i][1]);
        adjList.set(B[i][0], temp);
      } else {
        adjList.set(B[i][0], [B[i][1]]);
      }
      if (adjList.has(B[i][1])) {
        let temp = adjList.get(B[i][1]);
        temp.push(B[i][0]);
        adjList.set(B[i][1], temp);
      } else {
        adjList.set(B[i][1], [B[i][0]]);
      }
    }
    let visitedSet = new Set();
    let colour = new Array(A - 1);
    let q = new Queue();
    // pick all non visited node as source
    for (let i = 0; i < A; i++) {
      if (!visitedSet.has(i)) {
        q.enqueue(i, 1);
        colour[i] = 1;
        visitedSet.add(i);
        // do BFS
        while (q.front() != null) {
          let currNode = q.dequeue();
          let list = adjList.get(currNode.value);
          if (list) {
            for (let j = 0; j < list.length; j++) {
              if (!visitedSet.has(list[j])) {
                q.enqueue(list[j], 1 - currNode.colour);
                colour[list[j]] = 1 - currNode.colour;
                visitedSet.add(list[j]);
              } else {
                if (colour[list[j]] != 1 - currNode.colour) {
                  return 0;
                }
              }
            }
          }
        }
      }
    }
    return 1;
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val, colour) {
    let n1 = this.getNewNode(val, colour);
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
  getNewNode(val, colour) {
    let newNode = new Node(val, colour);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  colour;
  constructor(value, colour) {
    this.value = value;
    this.colour = colour;
    this.next = null;
  }
}
