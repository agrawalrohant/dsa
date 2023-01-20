// question -->https://www.scaler.com/academy/mentee-dashboard/class/52300/assignment/problems/35981?navref=cl_tt_lst_nm

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
    if (A == null) return null;
    if (A.data == B || A.data == C) {
      return A.data;
    } else if (A.data > B && A.data > C) {
      return this.solve(A.left, B, C);
    } else if (A.data < B && A.data < C) {
      return this.solve(A.right, B, C);
    } else {
      return A.data;
    }
  },
};
