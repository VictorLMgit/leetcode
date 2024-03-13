/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let sum = 0;
    for(let i = 0; i < nums.length ; i++) sum += nums[i];
    let pfs = 0;
    for(let i = 0; i < nums.length ; i++) {
        if (pfs == sum - nums[i] - pfs) return i;
        pfs += nums[i];
    }
    
   
    return -1;
};


const nums = [-1,-1,0,-1,-1,0];
const res = pivotIndex(nums);
console.log(res);