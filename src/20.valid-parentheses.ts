/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isValid(s: string): boolean {
  const wantStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        wantStack.push(")");
        break;
      case "[":
        wantStack.push("]");
        break;
      case "{":
        wantStack.push("}");
        break;
      default:
        if (s[i] !== wantStack.pop()) {
          return false;
        }
    }
  }
  return wantStack.length === 0;
}
// @lc code=end
