/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    NumArray.prefixSum = [0];
    let sum = 0;
    for (const num of nums) {
        sum+=num;
        NumArray.prefixSum.push(sum);
    }

};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return NumArray.prefixSum[right + 1] - NumArray.prefixSum[left];
};


var obj = new NumArray([1,5,3,5]);
var param_1 = obj.sumRange(0,2);
console.log(param_1);