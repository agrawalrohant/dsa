// question --> https://www.scaler.com/academy/mentee-dashboard/class/52912/homework/problems/4390/?navref=cl_pb_nv_tb

// Definition for the linked list.
//			function Node(data){
//				this.data = data
//				this.right = null
//              this.down = null
//			}
function flatten(root) {
  debugger;
  if (root == null || root.right == null) {
    return root;
  }
  let mid = getMid(root);
  let h2 = mid.right;
  mid.right = null;
  let a = flatten(root);
  let b = flatten(h2);
  let newH = merge(a, b);
  return newH;
}

function getMid(root) {
  let slow = root;
  let fast = root;
  while (fast.right != null && fast.right.right != null) {
    slow = slow.right;
    fast = fast.right.right;
  }
  return slow;
}

function merge(h1, h2) {
  let h3 = null;
  if (h1.data > h2.data) {
    h3 = h2;
    h2 = h2.down;
  } else {
    h3 = h1;
    h1 = h1.down;
  }
  let t = h3;
  while (h1 != null && h2 != null) {
    if (h1.data > h2.data) {
      t.down = h2;
      h2 = h2.down;
    } else {
      t.down = h1;
      h1 = h1.down;
    }
    t = t.down;
  }
  if (h1 == null) {
    t.down = h2;
  }
  if (h2 == null) {
    t.down = h1;
  }
  return h3;
}
