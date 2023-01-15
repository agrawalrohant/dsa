// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
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
      let level = null;
      let size = this.size;
      for (let i = 0; i < size; i++) {
        let temp = this.dequeue();
        if(level == null){
            level = temp.data;
        }
        if (temp.left) this.enqueue(temp.left);
        if (temp.right) this.enqueue(temp.right);
      }
      ans.push(level);
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
