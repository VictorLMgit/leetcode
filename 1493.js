/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let countZero = 1;
    let startWindow = 0
    let i = 0;
    let maxSequence = 0;

    while (i < nums.length) {

        if (nums[i] == 0) countZero--;
        
        while (countZero < 0) {
            if(nums[startWindow] == 0) countZero++;
            startWindow++;
        }
        maxSequence = Math.max(maxSequence , i-startWindow);
        i++;
    }
    return maxSequence;

};

const nums = [1, 1, 0, 1];
const retorno = longestSubarray(nums);
console.log(retorno);