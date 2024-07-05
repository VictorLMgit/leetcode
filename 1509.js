/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4) return 0;
    nums = nums.sort((a,b)=>a-b);
    const a = nums[nums.length - 1] - nums[3];
    const b = nums[nums.length - 2] - nums[2];
    const c = nums[nums.length - 3] - nums[1];
    const d = nums[nums.length - 4] - nums[0];
    return Math.min(a,b,c,d);
};

const nums = [6,6,0,1,1,4,6];
const r = minDifference(nums);
console.log(r);