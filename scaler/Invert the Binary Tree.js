// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return the root node in the tree
  invertTree: function (A) {
    if (A == null) return;
    let temp = A.left;
    A.left = A.right;
    A.right = temp;
    A.left = this.invertTree(A.left);
    A.right = this.invertTree(A.right);
    return A;
  },
};
