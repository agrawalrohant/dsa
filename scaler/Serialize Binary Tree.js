// question -->https://www.scaler.com/academy/mentee-dashboard/class/52294/homework/problems/9268?navref=cl_tt_nv

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  head: null,
  tail: null,
  size: 0,
  solve: function (A) {
    if (A == null) {
      return [];
    }
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    let ans = [];
    this.enqueue(A);
    while (!this.isEmpty()) {
      let size = this.size;
      for (let i = 0; i < size; i++) {
        let temp = this.dequeue();
        ans.push(temp.data);
        if (temp.data != -1) {
          if (temp.left) {
            this.enqueue(temp.left);
          } else {
            this.enqueue(new TreeNode(-1));
          }
          if (temp.right) {
            this.enqueue(temp.right);
          } else {
            this.enqueue(new TreeNode(-1));
          }
        }
      }
    }
    return ans;
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

class QueueNode {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
