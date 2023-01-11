// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/assignment/problems/4365/submissions

module.exports = {
  //param A : string
  //return a strings
  head: null,
  tail: null,
  solve: function (A) {
    this.head = null;
    this.tail = null;
    let uniqueSet = new Set();
    let duplicateSet = new Set();
    let ans = "";
    for (let i = 0; i < A.length; i++) {
      if (uniqueSet.has(A[i])) {
        duplicateSet.add(A[i]);
      } else {
        this.enqueue(A[i]);
        uniqueSet.add(A[i]);
      }
      while (duplicateSet.has(this.front())) {
        this.dequeue();
      }
      ans += this.front();
    }
    return ans;
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
        this.tail = null;
      }
      return val;
    }
  },
  front() {
    if (this.head == null) {
      return "#";
    }
    return this.head.value;
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
