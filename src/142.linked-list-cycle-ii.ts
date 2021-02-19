/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return null;
  let fast = head,
    slow = head,
    counter = 0;
  while (fast !== null && fast.next !== null) {
    counter++;
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let returnHead: ListNode;
      for (let i = 0; i < counter; i++) {
        returnHead = head.next;
      }
      return returnHead;
    }
  }

  return null;
}
// @lc code=end
