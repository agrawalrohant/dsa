// question --> https://www.scaler.com/academy/mentee-dashboard/class/52300/homework/problems/6562?navref=cl_tt_nv

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    if (A == null) {
      return 0;
    }
    if (A.data > B && A.data > C) {
      return this.solve(A.left, B, C);
    } else if (A.data < B && A.data < C) {
      return this.solve(A.right, B, C);
    } else {
      return findHeight(A, B) + findHeight(A, C);
    }

    function findHeight(root, target) {
      if (root == null) {
        return 0;
      }
      if (root.data == target) {
        return 0;
      } else if (root.data > target) {
        return 1 + findHeight(root.left, target);
      } else {
        return 1 + findHeight(root.right, target);
      }
    }
  },
};
