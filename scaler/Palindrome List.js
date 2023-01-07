// question --> https://www.scaler.com/academy/mentee-dashboard/class/52912/assignment/problems/331/submissions

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  lPalin: function (A) {
    let middle = this.firstMiddle(A);
    middle.next = this.reverseList(middle.next);
    // iterate from A and middle.next and check
    let p1 = A;
    let p2 = middle.next;
    let flag = 1;
    while (p1 != middle.next && p2 != null) {
      if (p1.data != p2.data) {
        flag = 0;
        break;
      }
      p1 = p1.next;
      p2 = p2.next;
    }
    middle.next = this.reverseList(middle.next);
    if (flag == 1) {
      return 1;
    } else {
      return 0;
    }
  },
  firstMiddle: function (A) {
    let x = A;
    let x2 = A;
    while (x2.next != null && x2.next.next != null) {
      x = x.next;
      x2 = x2.next.next;
    }
    return x;
  },
  reverseList: function (A) {
    let h1 = A;
    let h2 = null;
    let temp = null;
    while (h1 != null) {
      temp = h1;
      h1 = h1.next;
      temp.next = h2;
      h2 = temp;
    }
    return h2;
  },
};
