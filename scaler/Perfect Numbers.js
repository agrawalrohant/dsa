// question -->https://www.scaler.com/academy/mentee-dashboard/class/52292/assignment/problems/3297?navref=cl_tt_nv

module.exports = {
  //param A : integer
  //return a strings
  head: null,
  tail: null,
  solve: function (A) {
    let count = 2;
    this.head = null;
    this.tail = this.head;
    if (A == 1 || A == 2) {
      return A + "" + A;
    } else {
      this.enqueue("1");
      this.enqueue("2");
      this.enqueue("$");
      while (count < A) {
        let dequeueVal = this.dequeue();
        while (dequeueVal != "$") {
          let newValue = dequeueVal + "1";
          this.enqueue(newValue);
          count++;
          if (count == A) {
            return newValue + this.reverse(newValue);
          }
          newValue = dequeueVal + "2";
          this.enqueue(newValue);
          count++;
          if (count == A) {
            return newValue + this.reverse(newValue);
          }
          dequeueVal = this.dequeue();
        }
        this.enqueue("$");
      }
      //return this.front() + this.reverse(this.front());
    }
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
  front() {
    return this.head.value;
  },
  getNewNode(val) {
    let newNode = new Node(val);
    newNode.next = null;
    return newNode;
  },
  reverse(str) {
    let ans = new Array(str.length);
    let s = 0;
    let e = str.length - 1;
    while (s <= e) {
      ans[e] = str[s];
      ans[s] = str[e];
      s++;
      e--;
    }
    return ans.join("");
  },
};
class Node {
  value;
  next;
  constructor(value) {
    this.value = value; // question -->
    this.next = null;
  }
}
