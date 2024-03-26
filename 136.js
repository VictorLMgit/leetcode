/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mapNumbers = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (mapNumbers[element]) {
            mapNumbers[element]= false;
            continue;
        }
        mapNumbers[element] = true;
    }
    for (const key in mapNumbers) {
       if(mapNumbers[key]) return key;
    }
};

const nums = [4,1,2,1,2];

const r = singleNumber(nums);

console.log(r);
