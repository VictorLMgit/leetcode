/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let mapComplements = {};
    let complement;
    for (let i = 0; i < nums.length; i++) {

        complement = target - nums[i]; 
        if (mapComplements[complement] !== undefined) return [mapComplements[complement], i];
        mapComplements[nums[i]] = i;
    }
    return [];
};

// target - nums[i] = complement


const nums = [11,15,2,7];
const target = 9;

console.log(twoSum(nums, target));