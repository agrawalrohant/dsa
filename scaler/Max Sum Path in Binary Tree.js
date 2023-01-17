// question -->https://www.scaler.com/academy/mentee-dashboard/class/52296/homework/problems/15?navref=cl_tt_nv

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  ans: Number.MIN_SAFE_INTEGER,
  maxPathSum(A) {
    this.ans = Number.MIN_SAFE_INTEGER;
    this.maxSum(A);
    return this.ans;
  },
  maxSum: function (A) {
    if (A == null) {
      return null;
    }
    let lht = this.maxSum(A.left);
    let rht = this.maxSum(A.right);
    if (lht == null) {
      this.ans = Math.max(this.ans, A.data, A.data + rht);
      return A.data + rht;
    } else if (rht == null) {
      this.ans = Math.max(this.ans, A.data, A.data + lht);
      return A.data + lht;
    }
    if (rht == null && lht == null) {
      this.ans = Math.max(this.ans, A.data);
      return A.data;
    } else {
      this.ans = Math.max(
        this.ans,
        A.data,
        A.data + lht,
        A.data + rht,
        A.data + lht + rht
      );
      return A.data + Math.max(lht, rht);
    }
  },
};
