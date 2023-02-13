// question -->https://www.scaler.com/academy/mentee-dashboard/class/52306/homework/problems/4394?navref=cl_tt_nv

//param A : root node of tree
//return the root node in the tree
function solve(A) {
  return convertToDLL(A);
}

function convertToDLL(root) {
  if (root == null) {
    return null;
  }
  let leftDLL = convertToDLL(root.left);
  let rightDLL = convertToDLL(root.right);
  root.left = root.right = root;
  let leftWithRoot = connect(leftDLL, root);
  return connect(leftWithRoot, rightDLL);
}

function connect(leftList, rightList) {
  if (leftList == null) return rightList;
  if (rightList == null) return leftList;

  let leftLast = leftList.left;

  let rightLast = rightList.left;
  if (leftLast) leftLast.right = rightList;
  rightList.left = leftLast;
  leftList.left = rightLast;
  if (rightLast) rightLast.right = leftList;
  return leftList;
}
