/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    for (let i = 0; i < k; i++) maxSum += nums[i];
    let currentWindow = maxSum;
    for (let i = 0; i <= nums.length - k; i++) {
        currentWindow = currentWindow - nums[i] + nums[i+k];
        if (currentWindow > maxSum) maxSum = currentWindow;
    }
    return maxSum/k;
};

const nums = [-1];
const k = 1;

console.log(findMaxAverage(nums, k));2