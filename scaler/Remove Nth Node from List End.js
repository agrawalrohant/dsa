// question --> https://www.scaler.com/academy/mentee-dashboard/class/41067/homework/problems/39?navref=cl_tt_lst_nm

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  removeNthFromEnd: function (A, B) {
    let lengthOfLL = 0;
    let nextNode = A;
    while (nextNode != null) {
      lengthOfLL++;
      nextNode = nextNode.next;
    }
    let posToDelete = lengthOfLL - B + 1;
    if (B > lengthOfLL) {
      posToDelete = 1;
    }
    A = this.deleteElement(A, posToDelete);
    return A;
  },
  deleteElement: function (head, posToDelete) {
    if (posToDelete == 1) {
      return head.next;
    }
    let counter = 1;
    let nextNode = head;
    while (counter < posToDelete - 1) {
      nextNode = nextNode.next;
      counter++;
    }
    nextNode.next = nextNode.next.next;
    return head;
  },
};
