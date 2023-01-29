// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : root node of tree
  //return an integer
  isSameTree: function (A, B) {
    if (A == null && B == null) return 1;
    if (A == null || B == null) return 0;
    if (A.data != B.data) return 0;
    let left = this.isSameTree(A.left, B.left);
    let right = this.isSameTree(A.right, B.right);
    return left && right;
  },
};
