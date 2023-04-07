// question -->https://www.scaler.com/academy/mentee-dashboard/class/52332/assignment/problems/4697/?navref=cl_pb_nv_tb

module.exports = {
  //param A : array of array of integers
  //param B : array of integers
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    // Create a empty Queue
    let N = A.length;
    let M = A[0].length;
    let q = new Queue();
    let visited = [];
    let enterDirectionC = [];
    for (let i = 0; i < N; i++) {
      let temp = [];
      for (let j = 0; j < M; j++) {
        if (i == C[0] && j == C[1]) {
          // row = [-1 0 1 0]
          // col = [0 1 0 -1]
          if (isValidIndexValue1(i - 1, j)) {
            enterDirectionC.push(4);
          }
          if (isValidIndexValue1(i, j + 1)) {
            enterDirectionC.push(3);
          }
          if (isValidIndexValue1(i + 1, j)) {
            enterDirectionC.push(2);
          }
          if (isValidIndexValue1(i, j - 1)) {
            enterDirectionC.push(1);
          }
        }
        temp.push([null, -1, -1, -1, -1]);
      }
      visited.push(temp);
    }

    function isValidIndexValue1(i, j) {
      if (i < 0 || i >= N || j < 0 || j >= M || A[i][j] == 1) {
        return true;
      }
      return false;
    }

    function isValidIndexValue0(i, j) {
      if (i >= 0 && i < N && j >= 0 && j < M && A[i][j] == 0) {
        return true;
      }
      return 0;
    }

    

    // create source nodes and enter into q
    q.enqueue(B[0], B[1], 0, -1);
    visited[B[0]][B[1]][1] = 1;
    visited[B[0]][B[1]][2] = 1;
    visited[B[0]][B[1]][3] = 1;
    visited[B[0]][B[1]][4] = 1;

    // Iterate till queue is empty
    while (q.front() != null) {
      let currNode = q.dequeue();
      let i = currNode.cordinate.i;
      let j = currNode.cordinate.j;
      let iVariation = [-1, 0, 1, 0];
      let jVariation = [0, 1, 0, -1];
      let direction = [4, 3, 2, 1];
      //let direction = [1, 2, 3, 4];
      if (currNode.direction != null) {
        let ind = direction.indexOf(currNode.direction);
        if(isValidIndexValue0(i + iVariation[ind],j + jVariation[ind])){
          let ret = checkAndAdd(i + iVariation[ind],j + jVariation[ind],currNode.direction,currNode);
          if(ret){
            return ret;
          }
        }else{
          for (let k = 0; k < 4; k++) {
            let ret = checkAndAdd(i + iVariation[k],j + jVariation[k],direction[k],currNode);
            if(ret){
              return ret;
            }
          }
        }
      }else{
        for (let k = 0; k < 4; k++) {
          let ret = checkAndAdd(i + iVariation[k],j + jVariation[k],direction[k],currNode);
          if(ret){
            return ret;
          }
        }
      }
      
    }

    function checkAndAdd(curri,currj,dir,currNode) {
      // check destination
      if (isValidIndexValue0(curri, currj)) {
        if (
          curri == C[0] &&
          currj == C[1] &&
          enterDirectionC.includes(dir)
        ) {
          return currNode.value + 1;
        }
        if (visited[curri][currj][dir] == -1) {
          q.enqueue(curri, currj, currNode.value + 1, dir);
          visited[curri][currj][dir] = 1;
        }
      }
    }
    return -1;
  },
};

class Queue {
  head = null;
  tail = null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(i, j, val, dir) {
    let n1 = this.getNewNode(i, j, val, dir);
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
      let val = this.head;
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
      return this.head;
    }
    return null;
  }
  getNewNode(i, j, val, dir) {
    let newNode = new DirectionNode(i, j, val, dir);
    newNode.next = null;
    return newNode;
  }
}

class DirectionNode {
  direction;
  cordinate;
  next;
  value;
  constructor(i, j, value, direction) {
    this.value = value;
    this.cordinate = new Cordinate(i, j);
    this.next = null;
    this.direction = direction;
  }
}
class Cordinate {
  i;
  j;
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }
}
