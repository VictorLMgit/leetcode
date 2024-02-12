/**
 * @param {number[]} nums
 * @return {number}
*/
var majorityElement = function(nums) {
    //O(n) Solution:
    if (nums.length == 1) return nums[0];
    const target = (nums.length/2);
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element in map) {
            map[element]++;
            if (map[element] >= target) return element;
            continue;
        }
        map[element] = 1;
    }

};
