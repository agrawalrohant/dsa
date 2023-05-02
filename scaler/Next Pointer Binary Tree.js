// question --> https://www.scaler.com/academy/mentee-dashboard/class/52302/assignment/problems/235?navref=cl_tt_nv

// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = {
  //param A : root node of tree
  //return nothing
  connect: function (A) {
    if (A == null) {
      return null;
    }
    let levelStart = A;
    while (levelStart != null) {
      let curr = levelStart;
      while (curr != null) {
        if (curr.left != null) {
          curr.left.next = curr.right;
        }
        if (curr.right != null) {
          curr.right.next = getNextChildOfRigth(curr);
        }
        curr = curr.next;
      }
      levelStart = levelStart.left;
    }
    return A;
    function getNextChildOfRigth(node) {
      let curr = node.next;
      while (curr != null) {
        if (curr.left != null) {
          return curr.left;
        }
      }
      return null;
    }
  },
};
