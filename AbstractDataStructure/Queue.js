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
