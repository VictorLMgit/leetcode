/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sn = ((1 + nums.length) * nums.length) / 2;
    let sum = 0;
    for (const num of nums) sum+=num
    return sn - sum;
};


const arr = [0,1,3];
console.log(missingNumber(arr));