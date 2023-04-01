// question -->https://www.scaler.com/academy/mentee-dashboard/class/52332/homework/problems/418/?navref=cl_pb_nv_tb

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //param D : integer
  //param E : array of integers
  //param F : array of integers
  //return a strings
  solve: function (A, B, C, D, E, F) {
    // form a 2D matrix=> A x B size
    let matrix = [];
    for (let i = 0; i <= A; i++) {
      let temp = [];
      for (let j = 0; j <= B; j++) {
        temp.push(0);
      }
      matrix[i] = temp;
    }
    // update circle points
    for (let i = 0; i <= A; i++) {
      for (let j = 0; j <= B; j++) {
        if (matrix[i][j] == 0 && insideCircle(i, j)) {
          matrix[i][j] = 1;
        }
      }
    }
    /*for (let i = 0; i < E.length; i++) {
      updateCirclePoints(E[i], F[i], D);
    }*/

    // Do BFS from source as 0,0 and check target as x,y
    let q = new Queue();
    if (matrix[0][0] == 0) {
      q.enqueue(new CordinatePoint(0, 0, 0));
      matrix[0][0] = 1;
    }
    while (q.front() != null) {
      let curr = q.dequeue();
      let row = [-1, -1, 0, 1, 1, 1, 0, -1];
      let col = [0, 1, 1, 1, 0, -1, -1, -1];
      for (let i = 0; i < 8; i++) {
        let newX = row[i] + curr.cord.x;
        let newY = col[i] + curr.cord.y;

        if (isValidAndNotMarked(newX, newY)) {
          if (newX == A && newY == B) {
            return "YES";
          }
          q.enqueue(new CordinatePoint(newX, newY, curr.dist + 1));
          matrix[newX][newY] = 1;
        }
      }
    }
    return "NO";
    /*function updateCirclePoints(x, y, repeat) {
      if (repeat <= 0) {
        return;
      }
      let row = [-1, 0, 1, 0];
      let col = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        let newX = x + row[i];
        let newY = y + col[i];
        if (isValid(newX, newY)) {
          matrix[newX][newY] = 1;
          updateCirclePoints(newX, newY, repeat - 1);
        }
      }
    }*/

    function insideCircle(x, y) {
      for (let i = 0; i < E.length; i++) {
        if (Math.sqrt((x - E[i]) * (x - E[i]) + (y - F[i]) * (y - F[i])) <= D) {
          return true;
        }
      }
      return false;
    }
    /*function isValid(x, y) {
      if (x >= 0 && y >= 0 && x <= A && y <= B) {
        return true;
      } else {
        return false;
      }
    }*/
    function isValidAndNotMarked(x, y) {
      if (x >= 0 && y >= 0 && x <= A && y <= B && matrix[x][y] == 0) {
        return true;
      } else {
        return false;
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

class CordinatePoint {
  dist;
  cord;
  constructor(x, y, dist) {
    this.dist = dist;
    this.cord = new Cordinate(x, y);
  }
}
class Cordinate {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
