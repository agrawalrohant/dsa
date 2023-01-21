// question -->https://www.scaler.com/academy/mentee-dashboard/class/52300/assignment/problems/218/submissions

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
  lca: function (A, B, C) {
    let ans = findLCS(A, B, C);
    if (B == C && (ans.foundN1 || ans.foundN2)) {
      ans.foundN1 = true;
      ans.foundN2 = true;
    }
    if (ans.foundN1 && ans.foundN2 && ans.value != null) {
      return ans.value;
    }
    return -1;

    function findLCS(root, N1, N2) {
      if (root == null) return new NodeInfo(false, false, null);

      let lLCS = findLCS(root.left, N1, N2);
      let rLCS = findLCS(root.right, N1, N2);

      if (!lLCS.foundN1 && !rLCS.foundN1 && root.data == N1) {
        return new NodeInfo(true, lLCS.foundN2 || rLCS.foundN2, root.data);
      }
      if (!lLCS.foundN2 && !rLCS.foundN2 && root.data == N2) {
        return new NodeInfo(lLCS.foundN1 || rLCS.foundN1, true, root.data);
      }

      if (lLCS.value == null && rLCS.value == null) {
        return new NodeInfo(false, false, null);
      }
      if (lLCS.value == null) {
        return rLCS;
      }
      if (rLCS.value == null) {
        return lLCS;
      } else {
        return new NodeInfo(
          lLCS.foundN1 || rLCS.foundN1,
          lLCS.foundN2 || rLCS.foundN2,
          root.data
        );
      }
    }
  },
};

class NodeInfo {
  foundN1;
  foundN2;
  value;
  constructor(foundN1, foundN2, value) {
    this.foundN1 = foundN1;
    this.foundN2 = foundN2;
    this.value = value;
  }
}
