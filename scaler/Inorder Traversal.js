// question --> https://www.scaler.com/academy/mentee-dashboard/class/52294/assignment/problems/214?navref=cl_tt_lst_nm
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
  result: [],
  inorderTraversal: function (A) {
    if (A == null) {
      return [];
    }
    this.result = [];
    this.stack = [];
    let current = A;
    while (current != null || !this.isEmpty()) {
      while (current) {
        this.stack.push(current);
        current = current.left;
      }
      current = this.stack.pop();
      this.result.push(current.data);
      current = current.right;
    }
    return this.result;
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
  inorderTraversal: function (A) {
    this.results = [];
    this.getInorder(A);
    return this.results;
  },
  getInorder: function (root) {
    if (root == null) {
      return;
    }
    this.getInorder(root.left);
    this.results.push(root.data);
    this.getInorder(root.right);
  },
};*/
