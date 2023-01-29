// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : integer
  //return an integer
  hasPathSum: function (A, B) {
    let ans = 0;
    preOrderTraversal(A, B, 0);
    return ans;
    function preOrderTraversal(root, target, current) {
      if (root == null) return;
      current += root.data;
      if (isLeaf(root)) {
        if (target == current) ans = 1;
      }
      preOrderTraversal(root.left, B, current);
      preOrderTraversal(root.right, B, current);
    }
    function isLeaf(node) {
      if (node.left == null && node.right == null) {
        return true;
      }
      return false;
    }
  },
};
