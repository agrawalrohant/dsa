// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  solve: function (A) {
    let obj = isSBT(A);
    if (obj.SBT) {
      return 1;
    } else {
      return 0;
    }
    function isSBT(root) {
      if (root == null) {
        return new TreeInfo(true, 0);
      }
      if (isLeaf(root)) {
        return new TreeInfo(true, root.data);
      }
      let left = isSBT(root.left);
      let right = isSBT(root.right);
      if (left.SBT && right.SBT && left.sum + right.sum == root.data) {
        return new TreeInfo(true, root.data + left.sum + right.sum);
      } else {
        return new TreeInfo(false, 0);
      }
    }
    function isLeaf(node) {
      if (node.left == null && node.right == null) {
        return true;
      } else {
        return false;
      }
    }
  },
};

class TreeInfo {
  SBT;
  sum;
  constructor(SBT, sum) {
    this.SBT = SBT;
    this.sum = sum;
  }
}
