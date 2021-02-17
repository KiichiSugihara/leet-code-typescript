/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }

  // 再帰でリストを取り出す
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
// @lc code=end
