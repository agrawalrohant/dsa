// question --> https://www.scaler.com/academy/mentee-dashboard/class/52912/homework/problems/41/?navref=cl_pb_nv_tb

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  partition: function (A, B) {
    let h1 = null;
    let h2 = null;
    let h1Running = null;
    let h2Running = null;
    let h3Running = A;
    if (A.data < B) {
      h1 = A;
      h1Running = A;
    } else {
      h2 = A;
      h2Running = A;
    }
    h3Running = h3Running.next;
    while (h3Running != null) {
      if (h3Running.data < B) {
        // add to h1
        if (h1 == null) {
          h1 = h3Running;
          h1Running = h3Running;
        } else {
          h1Running.next = h3Running;
          h1Running = h1Running.next;
        }
      } else {
        // add to h2
        if (h2 == null) {
          h2 = h3Running;
          h2Running = h3Running;
        } else {
          h2Running.next = h3Running;
          h2Running = h2Running.next;
        }
      }
      h3Running = h3Running.next;
    }
    if (h1Running) {
      h1Running.next = h2;
    }
    if(h2Running){
        h2Running.next = null;
    }
    if (h1 == null) {
      return h2;
    }
    return h1;
  },
};
