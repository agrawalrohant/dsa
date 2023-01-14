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
};
