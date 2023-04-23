// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/homework/problems/4366?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let MOD = BigInt(1000000000 + 7);
    let ans = BigInt(0);
    let maxDQ = new DeQue();
    let minDQ = new DeQue();
    maxDQ.pushFromRear(0);
    minDQ.pushFromRear(0);
    // initailly upto B elements
    for (let i = 1; i < B; i++) {
      while (A[i] > A[maxDQ.peekFromRear()]) {
        maxDQ.popFromRear();
      }
      maxDQ.pushFromRear(i);
      while (A[i] < A[minDQ.peekFromRear()]) {
        minDQ.popFromRear();
      }
      minDQ.pushFromRear(i);
    }

    ans = ((ans % MOD) + (BigInt(A[maxDQ.peekFromFront()]) % MOD)) % MOD;
    ans = ((ans % MOD) + (BigInt(A[minDQ.peekFromFront()]) % MOD)) % MOD;

    for (let i = B; i < A.length; i++) {
      if (maxDQ.peekFromFront() == i - B) {
        maxDQ.popFromFront();
      }

      while (A[maxDQ.peekFromRear()] < A[i]) {
        maxDQ.popFromRear();
      }
      maxDQ.pushFromRear(i);
      ans = ((ans % MOD) + (BigInt(A[maxDQ.peekFromFront()]) % MOD)) % MOD;

      if (minDQ.peekFromFront() == i - B) {
        minDQ.popFromFront();
      }
      while (A[minDQ.peekFromRear()] > A[i]) {
        minDQ.popFromRear();
      }
      minDQ.pushFromRear(i);
      ans = ((ans % MOD) + (BigInt(A[minDQ.peekFromFront()]) % MOD)) % MOD;
    }
    if(Number(ans) <0){
        return Number(ans + MOD);
    }else{
        return Number(ans);
    }
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
