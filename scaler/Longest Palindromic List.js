// question --> https://www.scaler.com/academy/mentee-dashboard/class/52912/assignment/problems/4386?navref=cl_tt_nv

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    let maxLength = 1;
    let curr = A;
    let prev = null;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      // odd length
      let p1 = prev;
      let p2 = next;
      maxLength = Math.max(maxLength, 2 * this.countCommonNodes(p1, p2) + 1);
      // even length
      p1 = curr;
      p2 = next;
      maxLength = Math.max(maxLength, 2 * this.countCommonNodes(p1, p2));
      prev = curr;
      curr = next;
    }
    return maxLength;
  },
  countCommonNodes(A, B) {
    let count = 0;
    while (A != null && B != null) {
      if (A.data == B.data) {
        count++;
      } else {
        break;
      }
      A = A.next;
      B = B.next;
    }
    return count;
  },
};
