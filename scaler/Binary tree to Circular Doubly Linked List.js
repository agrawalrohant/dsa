// question -->https://www.scaler.com/academy/mentee-dashboard/class/52306/homework/problems/4394?navref=cl_tt_nv

//param A : root node of tree
//return the root node in the tree
function solve(A) {
  return convertToDLL(A);

  function convertToDLL(root) {
    if (root == null) {
      return [null, null];
    }
    let [first, last] = convertToDLL(root.left);
    if (last != null) {
      last.right = root;
      root.left = last;
    }
    let [first2, last2] = convertToDLL(root.right);
    if (first2 != null) {
      root.right = first2;
      first2.left = root;
    }
    if (first == null && last2 == null) {
      return [root, root];
    } else if (first == null) {
      return [root, last2];
    } else if (last2 == null) {
      return [first, root];
    } else {
      return [first, last2];
    }
  }
}
