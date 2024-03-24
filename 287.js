/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let t = nums[0];
    let h = nums[0];

    do {

        t = nums[t];
        h = nums[nums[h]];
        console.log(t);
        console.log(h);
        console.log("-------");

    } while (t != h);
    
    t = nums[0];

    while (t != h) {
        t = nums[t];
        h = nums[h];
    }

    return t;
};
var findDuplicate2 = function (nums) {

    let b = {};

   for (const num of nums) {
        if (b[num]) return num;
        b[num] = true;
   }

    return b;
};


const nums = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
const r = findDuplicate2(nums);
console.log(r);