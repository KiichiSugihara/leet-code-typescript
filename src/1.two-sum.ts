/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// time O{n}
// space O{n}
function twoSum(nums: number[], target: number): number[] {
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
      const n = map[target - nums[i]];
      if (n !== undefined && n !== i) {
          return [i, map[target - nums[i]]];
      }
      // setTable {element:index}
      map[nums[i]] = i;
  }

  return [];
}
// @lc code=end

