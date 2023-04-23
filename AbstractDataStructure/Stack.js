class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
  }
  pop() {
    this.arr.pop();
  }
  peek() {
    let valueToReturn = this.arr[this.arr.length - 1];
    this.arr.pop();
    return valueToReturn;
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    if (this.arr.length == 0) {
      return true;
    }
    return false;
  }
}
