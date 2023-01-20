// question --> https://www.scaler.com/academy/mentee-dashboard/class/52298/assignment/problems/35476
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
  solve: function (A, B) {
    if (A == null) return 0;
    if (A.data == B) return 1;
    if (A.data > B) return this.solve(A.left, B);
    else return this.solve(A.right, B);
  },
};
