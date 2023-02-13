// question --> https://www.scaler.com/academy/mentee-dashboard/class/52306/assignment/problems/220/?navref=cl_pb_nv_tb

// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

/*If you notice carefully in the flattened tree,
each node’s right child points to the next node of a pre-order traversal.
Now, if a node does not have a left node, then our problem reduces to solving it for the node->right.*/

module.exports = {
  //param A : root node of tree
  //return the root node in the tree
  flatten: function (A) {
    let current = A;
    while (current.left != null || current.right != null) {
      if (current.left == null) {
        current = current.right;
      } else if (current.right == null) {
        current.right = current.left;
        current.left = null;
        current = current.right;
      } else {
        // find extrement right of left
        let current2 = current.left;
        while (current2.right != null) {
          current2 = current2.right;
        }
        current2.right = current.right;
        current.right = current.left;
        current.left = null;
        current = current.right;
      }
    }
    return A;
  },
};
