// question --> https://www.scaler.com/academy/mentee-dashboard/class/70585/homework/problems/4705/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let q = new Queue();
    let ans = [];
    for (let i = 0; i < A.length; i++) {
      let temp = [];
      for (let j = 0; j < A[0].length; j++) {
        if (A[i][j] == 1) {
          temp[j] = 0;
          q.enqueue(i, j, 0);
        } else {
          temp[j] = -1;
        }
      }
      ans.push(temp);
    }

    // BFS
    while (q.front() != null) {
      let currNode = q.dequeue();
      let row = [-1, 0, 1, 0];
      let col = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        let currI = currNode.cordinate.i + row[i];
        let currJ = currNode.cordinate.j + col[i];
        if (isValidAndNotVisited(currI, currJ)) {
          q.enqueue(currI, currJ, currNode.value + 1);
          ans[currI][currJ] = currNode.value + 1;
        }
      }
    }

    function isValidAndNotVisited(i, j) {
      if (
        i >= 0 &&
        j >= 0 &&
        i < A.length &&
        j < A[0].length &&
        ans[i][j] == -1
      ) {
        return true;
      }
      return false;
    }
    return ans;
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(i,j,val) {
    let n1 = this.getNewNode(i,j,val);
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
  getNewNode(i,j,val) {
    let newNode = new Node(i,j,val);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  cordinate;
  constructor(i, j, value) {
    this.value = value;
    this.next = null;
    this.cordinate = new Cordinate(i, j);
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
