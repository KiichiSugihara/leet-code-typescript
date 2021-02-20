/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  // Input: sorted Nodes
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // delete & move
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
// @lc code=end
