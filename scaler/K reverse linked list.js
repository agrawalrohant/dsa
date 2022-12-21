// question --> https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/380?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  reverseList: function (A, B) {
    // base condition
    if (A == null || B == 1) {
      return A;
    }
    // main logic
    let h1 = A;
    let h2 = null;
    let temp = null;
    let counter = B;
    while (h1 != null && counter > 0) {
      temp = h1;
      h1 = h1.next;
      temp.next = h2;
      h2 = temp;
      counter--;
    }
    A.next = this.reverseList(h1, B);
    return h2;
  },
};
