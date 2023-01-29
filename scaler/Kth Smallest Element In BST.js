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
  kthsmallest: function (A, B) {
    let count = 0;
    let arr = [];
    let ans = A[0];
    inOrderTraversal(A);
    return ans;

    function inOrderTraversal(root) {
      if (root == null) {
        return;
      }
      inOrderTraversal(root.left);
      count++;
      if (count == B) {
        ans = root.data;
        return;
      }
      arr.push(root.data);
      inOrderTraversal(root.right);
    }
  },
};
