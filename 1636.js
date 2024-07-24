/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    hashMap = new Map();
    for (let i = 0; i < nums.length; i++) hashMap.set(nums[i], hashMap.get(nums[i]) + 1 || 1);
    return nums.sort((a,b)=>hashMap.get(a)-hashMap.get(b)||b-a);
};

var frequencySort2 = function(nums) {
    let freq = new Map()
    for(let i=0;i<nums.length;i++){
        if(freq.get(nums[i])){
            freq.set(nums[i],freq.get(nums[i])+1)
        }
        else{
            freq.set(nums[i],1)
        }
    }
    return nums.sort((a,b)=>freq.get(a)-freq.get(b)||b-a)
};

const nums = [1,1,2,2,2,3];
const r = frequencySort(nums);
const r2 = frequencySort2(nums);
console.log(r);
console.log(r2);