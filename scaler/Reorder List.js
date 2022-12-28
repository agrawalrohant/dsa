// question --> https://www.scaler.com/academy/mentee-dashboard/class/52911/assignment/problems/33?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reorderList: function (A) {
    let arr = [];
    let current = A;
    while (current != null) {
      arr.push(current.data);
      current = current.next;
    }

    let ans = null;
    let pointer = null;
    if (arr.length > 2) {
      let n1 = new Node(arr[0]);
      n1.next = new Node(arr[arr.length - 1]);
      ans = n1;
      pointer = ans.next;
    } else if (arr.length == 2) {
      let n1 = new Node(arr[0]);
      n1.next = new Node(arr[1]);
      return n1;
    } else {
      return new Node(arr[0]);
    }

    let s = 1;
    let e = arr.length - 2;
    while (s <= e) {
      pointer.next = new Node(arr[s]);
      pointer = pointer.next;
      if (s != e) {
        pointer.next = new Node(arr[e]);
        pointer = pointer.next;
      }
      s++;
      e--;
    }
    return ans;
  },
};
