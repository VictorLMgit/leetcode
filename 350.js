/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    const mapNums1 = makeMap(nums1);
    const mapNums2 = makeMap(nums2);

    let inter = [];

    const keysMap1 = Object.keys(mapNums1);
    for (const key of keysMap1) {
        if (mapNums2[key]) {
            for (let i = 0; i < Math.min(mapNums1[key], mapNums2[key]); i++) {
                inter.push(key);     
            }
        }
    }
    return inter;

};

var makeMap = function(nums){
    let map = {};

    for (let i = 0; i < nums.length; i++) 
        map[nums[i]] = map[nums[i]] + 1 || 1;

    return map
}

var intersect2 = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    
    let i = 0 
    let j = 0
    let returnArray = [];
    
    while(j < nums2.length && i < nums1.length){
        if(nums1[i] === nums2[j]){
            returnArray.push(nums1[i]);
            i++;
            j++;
        }
        else if(nums1[i] > nums2[j]){
            j++;
        }
        else{
            i++;
        }
    }
    
    return returnArray;
};

const nums1 = [4,9,5,9,9,9,9], nums2 = [9,4,9,9,8,4];
const r = intersect(nums1,nums2);
console.log(r);
