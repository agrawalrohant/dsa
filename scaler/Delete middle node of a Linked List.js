// question -->https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/4227?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    let x = A;
    let x2 = A;
    while (
      x2.next != null &&
      x2.next.next != null &&
      x2.next.next.next != null
    ) {
      x = x.next;
      x2 = x2.next.next;
    }
    if (x.next || x != A) {
      x.next = x.next.next;
    } else {
      return x.next;
    }
    return A;
  },
};
