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
  