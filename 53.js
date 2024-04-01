/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let prefixSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        prefixSum += nums[i];
        maxSum = Math.max(prefixSum, maxSum);
        if (prefixSum < 0) prefixSum = 0;

    }
    return maxSum;
};



const arr = [-4, -1, -1, 3];
const r = maxSubArray(arr);
console.log(r);