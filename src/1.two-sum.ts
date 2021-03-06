/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function twoSum(nums: number[], target: number): number[] {
  // sortできない もとのindex必要
  // 探す
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}
// @lc code=end
