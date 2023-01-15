// question --> https://www.scaler.com/academy/mentee-dashboard/class/52294/homework/problems/9269?navref=cl_tt_nv
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : array of integers
  //return the root node in the tree
  head: null,
  tail: null,
  size: 0,
  solve: function (A) {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    let root = new TreeNode(A[0]);
    let current = root;
    for (let i = 1; i < A.length; i = i + 2) {
      let left = A[i];
      let right = A[i + 1];
      if (left != -1) {
        current.left = new TreeNode(left);
        this.enqueue(current.left);
      }
      if (right != -1) {
        current.right = new TreeNode(right);
        this.enqueue(current.right);
      }
      current = this.dequeue();
    }
    return root;
  },
  isEmpty: function () {
    if (this.head == null) {
      return true;
    }
    return false;
  },
  enqueue: function (val) {
    let n1 = this.getNewQueueNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
    this.size++;
  },
  dequeue: function () {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      if (this.head == null) this.tail = null;
      this.size--;
      return val;
    }
  },
  getNewQueueNode: function (val) {
    let newNode = new QueueNode(val);
    newNode.next = null;
    return newNode;
  },
};

class TreeNode {
  data;
  left;
  right;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class QueueNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
