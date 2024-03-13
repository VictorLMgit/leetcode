/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hashMap = {};
    let intersec = {};
    for (let i = 0; i < nums1.length; i++) {
        hashMap[nums1[i]] = true;
    }
    for(let i = 0; i< nums2.length; i++){
        if (hashMap[nums2[i]]) {
            intersec[nums2[i]] = true;
        }
    }

    return Object.keys(intersec);

};
    
const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

const r = intersection(nums1, nums2);
console.log(r);