// question -->https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/40?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A) {
    let h2 = null;
    let h1 = A;
    while (h1 != null) {
      A = h1.next;
      h1.next = h2;
      h2 = h1;
      h1 = A;
    }
    return h2;
  },
};
