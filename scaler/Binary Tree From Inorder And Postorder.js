// question --> https://www.scaler.com/academy/mentee-dashboard/class/52294/assignment/problems/224?navref=cl_tt_nv
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return the root node in the tree
  buildTree: function (A, B) {
    this.map = new Map();
    for (let i = 0; i < A.length; i++) {
      this.map.set(A[i], i);
    }
    return this.getTreeRoot(A, B, 0, A.length - 1, 0, B.length - 1);
  },
  map: new Map(),
  getTreeRoot(A, B, As, Ae, Bs, Be) {
    if (Bs > Be) {
      return null;
    }
    let root = new TreeNode(B[Be]);
    let ids = this.map.get(B[Be]);
    let x = ids - As;
    root.left = this.getTreeRoot(A, B, As, ids - 1, Bs, Bs + x - 1);
    root.right = this.getTreeRoot(A, B, ids + 1, Ae, Bs + x, Be - 1);
    return root;
  },
};
