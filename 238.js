/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let finalArray = [];
    finalArray.push(1);
    for (let i = 1; i < nums.length; i++) {
        finalArray.push(nums[i-1] * finalArray[i-1]);   
    } 

    let end = 1;
    for (let i = nums.length - 1 ; i >=0 ; i--) {
       
        finalArray[i] *= end;
        end *= nums[i];
        
    }
    return finalArray;

};


// Input: nums = [1,2,3,4]
// [?,?,2,?]
// [?,?,8,?]
// Output: [24,12,8,6]

const nums = [2,3,4,5]

const a = productExceptSelf(nums);

console.log(a);