// question -->https://www.scaler.com/academy/mentee-dashboard/class/52298/assignment/problems/4857/?navref=cl_pb_nv_tb


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
    let max = 1;
    largestBST(A);
    return max;
    function largestBST(root) {
      if (root == null) {
        return new TreeInfo(true, 0);
      }
      let leftObj = largestBST(root.left);
      let rightObj = largestBST(root.right);
      if (leftObj.isBinarySearchTree && rightObj.isBinarySearchTree) {
        if (root.left && root.right) {
          if (root.left.data < root.data && root.right.data > root.data) {
            // increment by 3
            let currSize = 1 + leftObj.currentSize + rightObj.currentSize;
            max = Math.max(max, currSize);
            return new TreeInfo(true, currSize);
          } else {
            return new TreeInfo(false, 0);
          }
        } else if (root.left) {
          if (root.left.data < root.data) {
            // increment by 2
            let currSize = 1 + leftObj.currentSize;
            max = Math.max(max, currSize);
            return new TreeInfo(true, currSize);
          } else {
            return new TreeInfo(false, 0);
          }
        } else if (root.right) {
          if (root.right.data > root.data) {
            // increment by 2
            let currSize = 1 + rightObj.currentSize;
            max = Math.max(max, currSize);
            return new TreeInfo(true, currSize);
          } else {
            return new TreeInfo(false, 0);
          }
        } else {
          return new TreeInfo(true, 1);
        }
      }
      return new TreeInfo(false, 0);
    }
  },
};

class TreeInfo {
  isBinarySearchTree = false;
  currentSize = 0;
  constructor(isBinarySearchTree, currentSize) {
    this.isBinarySearchTree = isBinarySearchTree;
    this.currentSize = currentSize;
  }
}
