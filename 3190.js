/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const rests = {
        0:0,
        1:1,
        2:1
    };
    let sum = 0;
    for (let i = 0; i < nums.length; i++) sum += rests[nums[i]%3];
    return sum;
};