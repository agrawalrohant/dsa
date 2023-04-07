// question --> https://www.scaler.com/academy/mentee-dashboard/class/70585/homework/problems/9428/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    let ans = BigInt(1);
    let mod = BigInt(998244353);
    // prepare Adj List
    let adjList = new Map();
    for (let i = 0; i < B.length; i++) {
      if (adjList.has(B[i][0])) {
        let temp = adjList.get(B[i][0]);
        temp.push(B[i][1]);
        adjList.set(B[i][0], temp);
      } else {
        adjList.set(B[i][0], [B[i][1]]);
      }
      if (adjList.has(B[i][1])) {
        let temp = adjList.get(B[i][1]);
        temp.push(B[i][0]);
        adjList.set(B[i][1], temp);
      } else {
        adjList.set(B[i][1], [B[i][0]]);
      }
    }
    let visitedSet = new Set();
    let set1 = new Set();
    let set2 = new Set();
    let q = new Queue();
    // pick all non visited node as source
    for (let i = 1; i <= A; i++) {
      if (!visitedSet.has(i)) {
        set1 = new Set();
        set2 = new Set();
        q.enqueue(i);
        visitedSet.add(i);
        set1.add(1);
        // do BFS
        while (q.front() != null) {
          let currNode = q.dequeue();
          let list = adjList.get(currNode);
          if (list) {
            let currSet = "set1";
            if (set2.has(currNode)) {
              currSet = "set2";
            }
            for (let j = 0; j < list.length; j++) {
              if (!visitedSet.has(list[j])) {
                if (currSet == "set1") {
                  set2.add(list[j]);
                } else {
                  set1.add(list[j]);
                }
                visitedSet.add(list[j]);
                q.enqueue(list[j]);
              } else {
                if (
                  (set1.has(list[j]) && currSet == "set1") ||
                  (set2.has(list[j]) && currSet == "set2")
                ) {
                  // Not Bipertite
                  return 0;
                }
              }
            }
          }
        }
        ans =
          ans *
          (((BigInt(1) << BigInt(set1.size)) % mod) +
            (((BigInt(1) << BigInt(set2.size)) % mod) % mod));
      }
    }
    // Bipartite
    return Number(ans % mod);
  },
};

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
