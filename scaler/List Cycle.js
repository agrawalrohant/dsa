// question --> https://www.scaler.com/academy/mentee-dashboard/class/52911/assignment/problems/43?navref=cl_tt_lst_nm

// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}
module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  detectCycle: function (A) {
    let slow = A;
    let fast = A;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        break;
      }
    }
    if (slow != fast) {
      return null; // No cycle
    } else {
      if (fast == A) {
        // met at head
        return A;
      } else {
        slow = A;
        while (slow.next != fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
        return fast.next;
      }
    }
  },
};
