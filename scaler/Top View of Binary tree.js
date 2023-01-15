// question -->https://www.scaler.com/academy/mentee-dashboard/class/52296/assignment/problems/5715?navref=cl_tt_nv

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
  map: new Map(),
  solve: function (A) {
    if (A == null) {
      return [];
    }
    this.map = new Map();
    this.head = null;
    this.tail = this.head;
    this.size = 0;
    let ans = [];
    this.enqueue(new DistNode(A, 0));
    while (!this.isEmpty()) {
      let size = this.size;
      for (let i = 0; i < size; i++) {
        let temp = this.dequeue();
        if (!this.map.has(temp.dist)) {
          this.map.set(temp.dist, []);
        }
        let arr = this.map.get(temp.dist);
        arr.push(temp.node.data);
        this.map.set(temp.dist, arr);
        if (temp.node.left)
          this.enqueue(new DistNode(temp.node.left, temp.dist - 1));
        if (temp.node.right)
          this.enqueue(new DistNode(temp.node.right, temp.dist + 1));
      }
    }
    const map = new Map([...this.map].sort((a, b) => a[0] - b[0]));
    map.forEach((value, key) => {
      ans.push(value[0]);
    });
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

class DistNode {
  node;
  dist;
  constructor(node, dist) {
    this.dist = dist;
    this.node = node;
  }
}
