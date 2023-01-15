// question -->https://www.scaler.com/academy/mentee-dashboard/class/52296/assignment/problems/225?navref=cl_tt_nv

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  ans: 1,
  isBalanced: function (A) {
    this.ans = 1;
    this.getHeight(A);
    return this.ans;
  },
  getHeight: function (root) {
    if (root == null) {
      return 0;
    }
    let lht = this.getHeight(root.left);
    let rht = this.getHeight(root.right);
    if (lht > rht && lht - rht > 1) {
      this.ans = 0;
    } else if (rht > lht && rht - lht > 1) {
      this.ans = 0;
    }
    return 1 + Math.max(lht, rht);
  },
};
