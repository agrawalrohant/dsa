// question --> https://www.scaler.com/academy/mentee-dashboard/class/41067/homework/problems/37?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  deleteDuplicates: function (A) {
    let nextNode = A;
    while (nextNode != null) {
      while (nextNode.next && nextNode.data == nextNode.next.data) {
        // delete next node from LL
        nextNode.next = nextNode.next.next;
      }
      nextNode = nextNode.next;
    }
    return A;
  },
};
