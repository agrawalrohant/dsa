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
};
