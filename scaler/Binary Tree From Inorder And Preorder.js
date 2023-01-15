// question -->https://www.scaler.com/academy/mentee-dashboard/class/52294/homework/problems/219?navref=cl_tt_lst_nm

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
  map: new Map(),
  buildTree: function (A, B) {
    this.map = new Map();
    for (let i = 0; i < B.length; i++) {
      this.map.set(B[i], i);
    }
    return this.buildNewTree(A, B, 0, A.length - 1, 0, B.length - 1);
  },
  buildNewTree: function (P, I, Is, Ie, Ps, Pe) {
    if (Ps > Pe) {
      return null;
    }
    let root = new TreeNode(P[Ps]);
    let idx = this.map.get(P[Ps]);
    let x = idx - Is;
    root.left = this.buildNewTree(P, I, Is, idx - 1, Ps + 1, Ps + x);
    root.right = this.buildNewTree(P, I, idx + 1, Ie, Ps + x + 1, Pe);
    return root;
  },
};
// To Submit
