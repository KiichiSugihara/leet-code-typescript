/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const symbols: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (
      (s[i - 1] === "I" && (s[i] === "V" || s[i] === "X")) ||
      (s[i - 1] === "X" && (s[i] === "L" || s[i] === "C")) ||
      (s[i - 1] === "C" && (s[i] === "D" || s[i] === "M"))
    ) {
      total += symbols[s[i]] - symbols[s[i - 1]];
      i--;
    } else {
      total += symbols[s[i]];
    }
  }
  return total;
}
// @lc code=end
