/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let total = init;
    for (let num of nums) {
        total = fn(total, num);
    }
    return total;
};

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let total = init;
    for (let i = 0; i < nums.length; i++) {
        total = fn(total, nums[i]);
    }
    return total;
};

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
let n = reduce(nums,fn,init);

console.log(n);