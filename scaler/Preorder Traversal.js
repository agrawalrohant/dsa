// question --> https://www.scaler.com/academy/mentee-dashboard/class/52294/homework/problems/222?navref=cl_tt_lst_nm

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
  preorderTraversal: function (A) {
    if (A == null) {
      return [];
    }
    let result = [];
    this.stack = [];
    let current = A;
    while (current != null || !this.isEmpty()) {
      while (current) {
        result.push(current.data);
        this.stack.push(current);
        current = current.left;
      }
      current = this.stack.pop();
      current = current.right;
    }
    return result;
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
/*module.exports = {
  //param A : root node of tree
  //return a array of integers
  results: [],
  preorderTraversal: function (A) {
    this.results = [];
    this.getPreorder(A);
    return this.results;
  },
  getPreorder: function (root) {
    if (root == null) {
      return;
    }
    this.results.push(root.data);
    this.getPreorder(root.left);
    this.getPreorder(root.right);
  },
};*/
