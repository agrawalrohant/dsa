// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  isSymmetric: function (A) {
    return isEqual(A.left, A.right);
    function isEqual(n1, n2) {
      if (n1 == null && n2 == null) return 1;
      if (n1 == null || n2 == null) return 0;
      if (n1.data != n2.data) return 0;
      return isEqual(n1.left, n2.right) && isEqual(n1.right, n2.left);
    }
  },
};
