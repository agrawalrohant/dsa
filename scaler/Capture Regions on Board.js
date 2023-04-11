// question -->https://www.scaler.com/academy/mentee-dashboard/class/70595/assignment/problems/208/?navref=cl_pb_nv_tb

module.exports = {
  /**
   * param A: list of string
   * return: list of string
   */
  solve: function (A) {
    let n = A.length;
    let m = A[0].length;
    let i = 0;
    let j = 1;
    for (; i < m; i++) {
      if (A[0][i] == "O") {
        reserveConnectingNodes(0, i);
      }
    }
    for (; j < n; j++) {
      if (A[j][m - 1] == "O") {
        reserveConnectingNodes(j, m - 1);
      }
    }
    i -= 2;
    for (; i >= 0; i--) {
      if (A[n - 1][i] == "O") {
        reserveConnectingNodes(n - 1, i);
      }
    }
    j -= 2;
    for (; j > 0; j--) {
      if (A[j][0] == "O") {
        reserveConnectingNodes(j, 0);
      }
    }

    // occupy remaing O
    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < m - 1; j++) {
        if (A[i][j] == "O") {
          A[i] = replaceChar(A[i], j, "X");
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (A[i][j] == "-") {
          A[i] = replaceChar(A[i], j, "O");
        }
      }
    }

    return A;

    function replaceChar(replaceAble, b, char) {
      let str = "";
      for (let i = 0; i < b; i++) {
        str += replaceAble[i];
      }
      str += char;
      for (let i = b + 1; i < m; i++) {
        str += replaceAble[i];
      }
      return str;
    }

    function reserveConnectingNodes(a, b) {
      let q = new Queue();
      q.enqueue(a, b);
      A[a] = replaceChar(A[a], b, "-");
      while (q.front() != null) {
        let curr = q.dequeue();
        let row = [-1, 0, 1, 0];
        let col = [0, 1, 0, -1];
        for (let i = 0; i < 4; i++) {
          let currI = curr.x + row[i];
          let currJ = curr.y + col[i];
          if (
            currI >= 0 &&
            currI < n &&
            currJ >= 0 &&
            currJ < m &&
            A[currI][currJ] == "O"
          ) {
            q.enqueue(currI, currJ);
            A[currI] = replaceChar(A[currI], currJ, "-");
          }
        }
      }
    }
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(a, b) {
    let n1 = this.getNewNode(a, b);
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
  getNewNode(a, b) {
    let newNode = new Node(a, b);
    newNode.next = null;
    return newNode;
  }
}
class Node {
  value;
  next;
  constructor(x, y) {
    this.value = new CoNode(x, y);
    this.next = null;
  }
}

class CoNode {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
