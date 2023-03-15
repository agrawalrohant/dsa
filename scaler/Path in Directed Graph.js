// question --> https://www.scaler.com/academy/mentee-dashboard/class/52332/assignment/problems/9359?navref=cl_tt_lst_nm

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  head: null,
  tail: null,
  duplicate: new Set(),
  solve: function (A, B) {
    this.head = null;
    this.tail = this.head;
    this.duplicate = new Set();
    // process B to Adj List (ignore index 0)
    let adjList = new Array(A + 1).fill();
    for (let i = 0; i < B.length; i++) {
      let start = B[i][0];
      let end = B[i][1];
      let startArr = adjList[start];
      if (!startArr) {
        startArr = [];
      }
      startArr.push(end);
      adjList[start] = startArr;
    }
    this.enqueue(1);
    this.duplicate.add(1);
    while (this.front() != null) {
      let current = this.dequeue();
      if (current == A) {
        return 1;
      }
      let currentList = adjList[current];
      if (currentList) {
        for (let i = 0; i < currentList.length; i++) {
          if (!this.duplicate.has(currentList[i])) {
            this.duplicate.add(currentList[i]);
            this.enqueue(currentList[i]);
          }
        }
      }
    }
    return 0;
  },
  enqueue(val) {
    let n1 = this.getNewNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
  },
  dequeue() {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = this.head;
      }
      return val;
    }
  },
  front() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  },
  getNewNode(val) {
    let newNode = new Node(val);
    newNode.next = null;
    return newNode;
  },
};

class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
