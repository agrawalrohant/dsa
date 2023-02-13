// question -->  https://www.scaler.com/academy/mentee-dashboard/class/52306/assignment/problems/35989?navref=cl_tt_nv

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
  //return a array of integers
  graph: new Map(),
  head: null,
  tail: null,
  solve: function (A, B, C) {
    // 1. Build Graph DS
    this.graph = new Map();
    this.buildGraph(A, null);
    // use a set to check duplicates in queue.
    let set = new Set();

    // 2. BFS search using Queue
    // Have Head and tail for Queue (Linked List implementation)
    this.head = null;
    this.tail = this.head;
    this.enqueue(B);
    set.add(B);
    // Use $ as delimiter
    this.enqueue("$");

    // Perform Operation C times
    while (C > 0) {
      let dequeueVal = this.dequeue();
      while (dequeueVal != "$") {
        let nextConnectArr = this.graph.get(dequeueVal);
        for (let i = 0; i < nextConnectArr.length; i++) {
          if (!set.has(nextConnectArr[i])) {
            this.enqueue(nextConnectArr[i]);
            set.add(nextConnectArr[i]);
          }
        }
        dequeueVal = this.dequeue();
      }
      C--;
      this.enqueue("$");
    }
    // The elements reamining in Queue are answers
    let ans = [];
    let dequeueAns = this.dequeue();
    while (dequeueAns != "$") {
      ans.push(dequeueAns);
      dequeueAns = this.dequeue();
    }
    return ans;
  },

  enqueue(val) {
    let n1 = this.getNewNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
  },

  dequeue() {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      return val;
    }
  },
  getNewNode(val) {
    let newNode = new Node(val);
    newNode.next = null;
    return newNode;
  },

  buildGraph: function (node, parent) {
    if (node == null) {
      return;
    }
    if (!this.graph.has(node.data)) {
      this.graph.set(node.data, []);
      if (parent != null) {
        let arr = this.graph.get(node.data);
        arr.push(parent.data);
        this.graph.set(node.data, arr);
        arr = this.graph.get(parent.data);
        arr.push(node.data);
        this.graph.set(parent.data, arr);
      }
    }
    this.buildGraph(node.left, node);
    this.buildGraph(node.right, node);
  },
};

class TrieNode {
  map;
  constructor() {
    this.map = new Map();
  }
}

class Node {
  value;
  next;
  constructor(value) {
    this.value = value; // question -->
    this.next = null;
  }
}
