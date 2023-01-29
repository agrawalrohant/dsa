// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  recoverTree: function (A) {
    let n2 = null;
    let n1 = null;
    let prev = null;
    treaverseInOrder(A);
    return [n2, n1];
    function treaverseInOrder(root) {
      if (root == null) {
        return;
      }
      treaverseInOrder(root.left);
      if (prev != null) {
        if (root.data < prev.data) {
          if (n1 == null) {
            n1 = prev.data;
            n2 = root.data;
          } else {
            n2 = root.data;
          }
        }
      }
      prev = root;
      treaverseInOrder(root.right);
    }
  },
};
