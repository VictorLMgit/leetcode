/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let map = {};
    let maxFrequency = 1;
    let countMaxFrequency = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
            continue;
        }
        map[nums[i]]++;
        if (maxFrequency < map[nums[i]]) {
            maxFrequency++;
        }
        
    }

    for (const key in map) {
       if (map[key] == maxFrequency) {
        countMaxFrequency+=maxFrequency;
       }
    }
    return countMaxFrequency;
};

const arr = [1,2,1];
const r = maxFrequencyElements(arr);
console.log(r);