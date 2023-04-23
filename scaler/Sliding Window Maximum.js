// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/assignment/problems/50/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  slidingMaximum: function (A, B) {
    let ans = [];

    let maxDQ = new DeQue();
    maxDQ.pushFromRear(0);
    // initailly upto B elements
    for (let i = 1; i < B; i++) {
      while (A[i] > A[maxDQ.peekFromRear()]) {
        maxDQ.popFromRear();
      }
      maxDQ.pushFromRear(i);
    }

    ans.push(A[maxDQ.peekFromFront()]);

    for (let i = B; i < A.length; i++) {
      if (maxDQ.peekFromFront() == i - B) {
        maxDQ.popFromFront();
      }

      while (A[maxDQ.peekFromRear()] < A[i]) {
        maxDQ.popFromRear();
      }
      maxDQ.pushFromRear(i);
      ans.push(A[maxDQ.peekFromFront()]);
    }

    return ans;
  },
};

// Need DeQue impl
class DeQue {
  head;
  tail;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  pushFromFront(value) {
    let newNode = new DLLNode(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  popFromFront() {
    if (this.head != null) {
      if (this.head.next == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
  }

  peekFromFront() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }

  pushFromRear(value) {
    let newNode = new DLLNode(value);
    if (this.tail == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  popFromRear() {
    if (this.tail != null) {
      if (this.tail.prev == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
  }

  peekFromRear() {
    if (this.tail) {
      return this.tail.value;
    }
    return null;
  }
}

class DLLNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
