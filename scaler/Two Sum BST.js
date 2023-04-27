// question -->https://www.scaler.com/academy/mentee-dashboard/class/52298/homework/problems/336/?navref=cl_pb_nv_tb


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
  t2Sum: function (A, B) {
    let set = new Set();
    let arr = [];
    inOrderTraversal(A);
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return 1;
      }
      set.add(B - arr[i]);
    }
    return 0;
    function inOrderTraversal(head) {
      if (head == null) {
        return;
      }
      inOrderTraversal(head.left);
      arr.push(head.data);
      inOrderTraversal(head.right);
    }
  },
};
