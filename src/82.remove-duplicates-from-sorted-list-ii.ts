/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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
  // 返す用
  const res = new ListNode(-1);
  let last = res;
  let dupe = null;
  // 回す用
  let curr = head;
  // headが空になるまで回す
  while (curr) {
    const next = curr.next;
    // 無駄な処理消す
    if (!next) {
      if (curr.val !== dupe) {
        last.next = curr;
      }
      break;
    }
    // current と nextの比較
    // current と next一致時 ２つとも消す
    // ただし，次も同じ場合がある→1メモリ(dupe)で一つ前を記録して，都度消す必要あり
    if (curr.val === next.val || curr.val === dupe) {
      dupe = curr.val;
      curr = curr.next;
    } else {
      last.next = curr;
      last = curr;
      curr = curr.next;
      last.next = null;
    }
  }
  return res.next;
}
// @lc code=end
