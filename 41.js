/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let hashSet = new Set();
    for (const num of nums) {
        if(num > 0) hashSet.add(num);
    }
    i = 1
    while (i <= hashSet.size) {
        if(!hashSet.has(i)) return i;
        i++;
    }
    return i;
};

const nums = [0,1,2];
const r = firstMissingPositive(nums);
console.log(r);