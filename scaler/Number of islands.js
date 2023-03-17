// question --> https://www.scaler.com/academy/mentee-dashboard/class/52332/assignment/problems/4702/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let q = new Queue();
    let visited = [];
    for (let i = 0; i < A.length; i++) {
      let temp = [];
      for (let j = 0; j < A[0].length; j++) {
        temp.push(-1);
      }
      visited.push(temp);
    }
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        // Island & not visted
        if (A[i][j] == 1 && visited[i][j] == -1) {
          count++;
          q.enqueue(i, j, 0);
          visited[i][j] = 0;
          while (q.front() != null) {
            let curr = q.dequeue();
            let i = curr.cordinate.i;
            let j = curr.cordinate.j;
            let iVariation = [-1, -1, 0, 1, 1, 1, 0, -1];
            let jVariation = [0, 1, 1, 1, 0, -1, -1, -1];
            for (let k = 0; k < 8; k++) {
              let curri = i + iVariation[k];
              let currj = j + jVariation[k];
              if (
                curri >= 0 &&
                currj >= 0 &&
                curri < A.length &&
                currj < A[0].length &&
                A[curri][currj] == 1 &&
                visited[curri][currj] == -1
              ) {
                q.enqueue(curri, currj, curr.value + 1);
                visited[curri][currj] = curr.value + 1;
              }
            }
          }
        }
      }
    }
    return count;
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(i, j, val) {
    let n1 = this.getNewNode(i, j, val);
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
      return this.head;
    }
    return null;
  }
  getNewNode(i, j, val) {
    let newNode = new Node(i, j, val);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  cordinate;
  next;
  value;
  constructor(i, j, value) {
    this.value = value;
    this.cordinate = new Cordinate(i, j);
    this.next = null;
  }
}
class Cordinate {
  i;
  j;
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
}
