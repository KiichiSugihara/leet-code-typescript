/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
const compare = (a: number, b: number) => b - a;
class KthLargest {
  kthNumber: number;
  nums: number[];
  constructor(kthNumber: number, nums: number[]) {
    this.kthNumber = kthNumber;
    this.nums = nums;
    // quick-sort
    this.nums.sort(compare);
  }
  add(val: number): number {
    //  add number to sorted numbers
    const insert = () => {
      if (
        this.nums[this.nums.length - 1] < val ||
        this.nums.length < this.kthNumber
      ) {
        this.nums.push(val);
        this.nums = this.nums.sort(compare);
        this.nums.length =
          this.nums.length > this.kthNumber ? this.kthNumber : this.nums.length;
      }
    };
    insert();
    return this.nums[this.nums.length - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
