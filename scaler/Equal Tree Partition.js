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
    let totalSum = getSum(A);
    let ans = checkSum(A, totalSum / 2);
    if (ans.found) {
      return 1;
    } else {
      return 0;
    }
    return totalSum;
    function checkSum(root, target) {
      if (root == null) {
        return new TreeInfo(false, 0);
      }
      let left = checkSum(root.left, target);
      let right = checkSum(root.right, target);
      let currnetSum = root.data + left.value + right.value;
      if (currnetSum == target) {
        return new TreeInfo(true, currnetSum);
      } else {
        return new TreeInfo(left.found || right.found, currnetSum);
      }
    }
    function getSum(root) {
      if (root == null) {
        return 0;
      }
      let left = getSum(root.left);
      let right = getSum(root.right);
      return root.data + left + right;
    }
  },
};

class TreeInfo {
  found;
  value;
  constructor(found, value) {
    this.found = found;
    this.value = value;
  }
}
