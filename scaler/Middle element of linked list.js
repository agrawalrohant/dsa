// question -->https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/4370?navref=cl_tt_lst_nm

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    let x = A;
    let x2 = A;
    while (x2.next != null && x2.next.next != null) {
      x = x.next;
      x2 = x2.next.next;
    }
    if (x2.next != null) {
      return x.next.data;
    } else {
      return x.data;
    }
  },
};
