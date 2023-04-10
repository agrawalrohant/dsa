// question --> https://www.scaler.com/academy/mentee-dashboard/class/70590/assignment/problems/4974?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //param B : array of integers
  //param C : array of integers
  //param D : array of integers
  //param E : array of integers
  //param F : array of integers
  //return a array of integers
  solve: function (A, B, C, D, E, F) {
    // perpare Adj List
    let adjList = new Map();
    for (let i = 0; i < B.length; i++) {
      if (adjList.has(B[i])) {
        let temp = adjList.get(B[i]);
        temp.push(C[i]);
        adjList.set(B[i], temp);
      } else {
        adjList.set(B[i], [C[i]]);
      }
      if (adjList.has(C[i])) {
        let temp = adjList.get(C[i]);
        temp.push(B[i]);
        adjList.set(C[i], temp);
      } else {
        adjList.set(C[i], [B[i]]);
      }
    }
    // Do BFS and generate
    let treeLevelOrder = new Map();
    let maxLevel = 0;
    let visitedSet = new Set();
    let q = new Queue();
    q.enqueue(new TreeNode(1, 0));
    visitedSet.add(1);
    while (q.front() != null) {
      let curr = q.dequeue();
      let list = adjList.get(curr.value);
      if (treeLevelOrder.has(curr.level)) {
        let temp = treeLevelOrder.get(curr.level);
        temp.push(D[curr.value - 1]);
        treeLevelOrder.set(curr.level, temp);
      } else {
        treeLevelOrder.set(curr.level, [D[curr.value - 1]]);
      }
      if (list) {
        for (let i = 0; i < list.length; i++) {
          if (!visitedSet.has(list[i])) {
            q.enqueue(new TreeNode(list[i], curr.level + 1));
            visitedSet.add(list[i]);
            maxLevel = Math.max(maxLevel, curr.level + 1);
          }
        }
      }
    }
    // sort
    treeLevelOrder.forEach((value, key, map) => {
      value.sort((a, b) => {
        return a - b;
      });
      map.set(key, value);
    });

    // iterate query
    let ans = [];
    for (let i = 0; i < E.length; i++) {
        // pick they level and do Binary Search
      let list = treeLevelOrder.get(E[i] % (maxLevel + 1));
      ans.push(binarySearch(list, F[i]));
    }

    return ans;

    function binarySearch(arr, target) {
      let s = 0;
      let e = arr.length - 1;
      let ans = -1;
      while (s <= e) {
        let mid = parseInt((s + e) / 2);
        if (arr[mid] > target) {
          ans = arr[mid];
          e = mid - 1;
        } else if (arr[mid] < target) {
          s = mid + 1;
        } else {
          return arr[mid];
        }
      }
      return ans;
    }
  },
};

class TreeNode {
  value;
  level;
  constructor(value, level) {
    this.value = value;
    this.level = level;
  }
}

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val) {
    let n1 = this.getNewNode(val);
    if (this.head == null && this.tail == null) {
      this.head = n1;
      this.tail = n1;
    } else {
      this.tail.next = n1;
      this.tail = n1;
    }
  }
  dequeue() {
    if (this.head == null) {
      return;
    } else {
      let val = this.head.value;
      //console.log(this.head.value);
      this.head = this.head.next;
      if (this.head == null) {
        this.tail = null;
      }
      return val;
    }
  }
  front() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }
  getNewNode(val) {
    let newNode = new Node(val);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
