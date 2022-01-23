/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  // Special cases:
  // - 負の数
  // - 0以外の１桁が0の数
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    // 既存の反転値を左に移動させて、末尾の値を足す(10で割った余り)。
    revertedNumber = revertedNumber * 10 + (i % 10);
  }

  return revertedNumber === x;
}
// @lc code=end
