/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1 = makeMap(nums1);
    const map2 = makeMap(nums2);
    let ans1 = [];
    let ans2 = [];

    for (const key in map1) {
        if(map2[key] == true) continue;
        ans1.push(key);
    }
    for (const key in map2) {
        if(map1[key] == true) continue;
        ans2.push(key);
    }

    return [ans1, ans2];
    
};

function makeMap(nums){
    let map = {}
    for(num of nums) if (map[num] == undefined) map[num] = true;
    return map
}

console.log(findDifference([1,2,3], [2,4,6]));