// question --> https://www.scaler.com/academy/mentee-dashboard/class/52911/homework/problems/36?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return the head node in the linked list
  mergeTwoLists: function (A, B) {
    let p1 = A;
    let p2 = B;
    let head = null;
    let tail = null;
    if (p1.data > p2.data) {
      head = p2;
      tail = p2;
      p2 = p2.next;
    } else {
      head = p1;
      tail = p1;
      p1 = p1.next;
    }

    while (p1 != null && p2 != null) {
      if (p1.data > p2.data) {
        tail.next = p2;
        tail = p2;
        p2 = p2.next;
      } else {
        tail.next = p1;
        tail = p1;
        p1 = p1.next;
      }
    }
    while (p1 != null) {
      tail.next = p1;
      tail = p1;
      p1 = p1.next;
    }
    while (p2 != null) {
      tail.next = p2;
      tail = p2;
      p2 = p2.next;
    }
    return head;
  },
};
