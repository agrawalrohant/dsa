// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  stack: [],
  postorderTraversal: function (A) {
    if (A == null) {
      return [];
    }
    let results = [];
    this.stack.push(A);
    while (!this.isEmpty()) {
      let curr = this.stack.pop();
      results.push(curr.data);
      if (curr.left) this.stack.push(curr.left);
      if (curr.right) this.stack.push(curr.right);
    }
    return this.reverse(results);
  },
  reverse: function (arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s < e) {
      let temp = arr[s];
      arr[s] = arr[e];
      arr[e] = temp;
      s++;
      e--;
    }
    return arr;
  },
  push: function (x) {
    this.stack[this.stack.length] = x;
  },
  pop: function () {
    let temp = this.stack[this.stack.length - 1];
    this.stack.pop();
    return temp;
  },
  isEmpty: function () {
    if (this.stack.length == 0) return true;
    else return false;
  },
};
// Using recursion
/*
module.exports = {
  //param A : root node of tree
  //return a array of integers
  results: [],
  postorderTraversal: function (A) {
    this.results = [];
    this.getPostorder(A);
    return this.results;
  },
  getPostorder: function (root) {
    if (root == null) {
      return;
    }
    this.getPostorder(root.left);
    this.getPostorder(root.right);
    this.results.push(root.data);
  },
};
*/
