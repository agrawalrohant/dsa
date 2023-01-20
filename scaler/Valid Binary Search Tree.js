// question --> https://www.scaler.com/academy/mentee-dashboard/class/52298/assignment/problems/221

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  inOrder: [],
  isValidBST: function (A) {
    this.inOrder = [];
    this.getInorder(A);
    //console.log(this.inOrder);
    for (let i = 1; i < this.inOrder.length; i++) {
      if (this.inOrder[i - 1] >= this.inOrder[i]) {
        return 0;
      }
    }
    return 1;
  },
  getInorder: function (root) {
    if (root == null) {
      return;
    }
    this.getInorder(root.left);
    this.inOrder.push(root.data);
    this.getInorder(root.right);
  },
};
