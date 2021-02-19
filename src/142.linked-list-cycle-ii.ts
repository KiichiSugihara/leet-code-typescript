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
  // set Node,check same Node
  let curr = head;
  const set = new Set();
  while (curr !== null) {
    if (set.has(curr)) {
      return curr;
    } else {
      set.add(curr);
      curr = curr.next;
    }
  }

  return null;
}
// @lc code=end
