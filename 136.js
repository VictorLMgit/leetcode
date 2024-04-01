/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    xor = 0;
    for (const num of nums) {
        console.log(`${xor} ^ ${num} = `);
        xor = xor ^ num;
        console.log(`${xor} `);

    }
    return xor
};

const nums = [4,1,2,1,2];

const r = singleNumber(nums);

console.log(r);
