/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    return [ findFirstIndex(nums, target, 0, nums.length), findLastIndex(nums, target, 0, nums.length)];

};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findLastIndex = function(nums, target, init, end) {
    const mid = Math.floor((init + end) / 2);
    if(init > end) return -1;
    if (nums[mid] == target && nums[mid+1] !== target) return mid;
    if (nums[mid] > target) return findLastIndex(nums, target, init, mid - 1);
    return findLastIndex(nums,target,mid+1, end);
    
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findFirstIndex = function(nums, target, init, end) {
    const mid = Math.floor((init + end) / 2);
    if(init > end) return -1;
    if (nums[mid] == target && nums[mid-1] !== target) return mid;
    if (nums[mid] < target)  return findFirstIndex(nums,target,mid+1, end);
    return findFirstIndex(nums, target, init, mid - 1);
    
    
}

const arr = [1,2,2,2,2,3,4,4,4,4,6,7,8,8,8,8,11];
const tg = 2;

const r = searchRange(arr, tg);
console.log(r);