// question --> //www.scaler.com/academy/mentee-dashboard/class/52296/assignment/problems/9256?navref=cl_tt_nv
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

https: module.exports = {
  //param A : root node of tree
  //return an integer
  ans: 0,
  solve: function (A) {
    this.ans = 0;
    this.getDiameter(A);
    return this.ans;
  },
  getDiameter: function (root) {
    if (root == null) {
      return 0;
    }
    let lht = this.getDiameter(root.left);
    let rht = this.getDiameter(root.right);
    let maxHt = 1 + Math.max(lht, rht);
    this.ans = Math.max(this.ans, 1 + rht + lht);
    return maxHt;
  },
};
