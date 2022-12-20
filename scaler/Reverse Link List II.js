// question --> https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/45/submissions

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  reverseBetween: function (A, B, C) {
    let nextNode = A;
    let counter = 1;
    while (counter < B - 1) {
      nextNode = nextNode.next;
      counter++;
    }
    //
    let h2 = null;
    let h1;
    if (nextNode == A && B == 1) {
      h1 = A;
    } else {
      h1 = nextNode.next;
    }
    let tail = h1;
    let K = C - B + 1;
    let temp = null;
    while (h1 != null && K > 0) {
      temp = h1;
      h1 = h1.next;
      temp.next = h2;
      h2 = temp;
      K--;
    }
    if (tail) {
      // connect the end
      tail.next = h1;
    }
    if (B != 1) {
      // connect the start
      nextNode.next = h2;
      return A;
    } else {
      return h2;
    }
  },
};
