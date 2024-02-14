/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let rearrangedArray = []
    let posI = 0
    let negI = 1
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] < 0) {
            rearrangedArray[negI] = nums[i]
            negI+=2
        }else{
            rearrangedArray[posI] = nums[i]
            posI+=2
        }
    }
    return rearrangedArray
};

const nums = [3,1,2,-5,2,-4,22,-3,-1,-12]; 
const a = rearrangeArray(nums);
console.log(a);