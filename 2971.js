/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b) => {return a-b});
    let prefixSum = nums[0] + nums[1];
    let perimeter = -1;
    for (let i = 2; i < nums.length; i++) {
        if (prefixSum > nums[i]) perimeter = prefixSum + nums[i];
        prefixSum += nums[i];
        
    }
    
    return perimeter;
};

const nums = [5,5,8,5];

console.log(largestPerimeter(nums));