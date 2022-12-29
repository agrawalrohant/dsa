// question --> https://www.scaler.com/academy/mentee-dashboard/class/52911/homework/problems/34?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  sortList: function (A) {
    if (A == null || A.next == null) {
      return A;
    }
    let mid = this.firstMiddle(A);
    let head2 = mid.next;
    mid.next = null;
    let x = this.sortList(A);
    let y = this.sortList(head2);
    let newHead = this.mergeTwoLists(x, y);
    return newHead;
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
  mergeTwoLists: function (A, B) {
    if (A == null) {
      return B;
    }
    if (B == null) {
      return A;
    }

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
    if (p1 != null) {
      tail.next = p1;
    }
    if (p2 != null) {
      tail.next = p2;
    }
    return head;
  },
};
