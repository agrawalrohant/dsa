// question --> https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head) {
    if (!head.next) {
      return head;
    }
    let prev = null,
      next = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
  return head;
};
