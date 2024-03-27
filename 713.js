/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let p1 = 0, p2 = 0;
    let ans = 0;
    while (p1 !== nums.length) {
        let product = 1;

        while (product < k) {
            product = product * nums[p2];
            if (product < k) ans++;
            p2++;
        }
        
        p1++;
        p2 = p1;
    }
    return ans;
};

const nums = [10, 5, 2, 6], k = 100;

const r = numSubarrayProductLessThanK(nums, k);
console.log(r);
