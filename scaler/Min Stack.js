function solve() {
  // Initalize your variables here
  this.stack = [];
  this.min = [];
}
solve.prototype.push = function (e) {
  if (this.stack.length === 0) {
    this.min.push(e);
  } else {
    if (e <= this.getMin()) {
      this.min.push(e);
    }
  }
  this.stack.push(e);
};
solve.prototype.pop = function () {
  if (this.stack.length > 0) {
    let deleteItem = this.top();
    this.stack.pop();
    if (deleteItem == this.getMin()) {
      this.min.pop();
    }
  }
};
solve.prototype.top = function () {
  // return top
  if (this.stack.length == 0) {
    return -1;
  } else {
    return this.stack[this.stack.length - 1];
  }
};
solve.prototype.getMin = function () {
  // return minimum
  if (this.min.length == 0) {
    return -1;
  } else {
    return this.min[this.min.length - 1];
  }
};
module.exports = {
  solve: solve,
};
