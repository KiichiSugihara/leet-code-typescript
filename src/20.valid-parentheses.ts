/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isValid(s: string): boolean {
  if (s.length <= 1) return false;
  interface ParenthesesSet {
    [key: string]: string;
  }
  const map: ParenthesesSet = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const wantStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      wantStack.push(map[s[i]]);
    } else {
      if (s[i] !== wantStack.pop()) {
        return false;
      }
    }
  }
  return wantStack.length === 0;
}
// @lc code=end
