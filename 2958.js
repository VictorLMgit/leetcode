/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {

    let head = 0;
    let tail = 0;
    let maxLenght = 0;
    let map = new Map();
   
    while (head < nums.length && tail <= head) {

        map.set(nums[head], map.get(nums[head]) + 1 || 1);
        if (map.get(nums[head]) <= k || map.get(nums[head]) == undefined) {
            maxLenght = Math.max(maxLenght, (head - tail) + 1);
            head++;
        } else {
            while (map.get(nums[head]) > k) {
                map.set(nums[tail], map.get(nums[tail]) - 1);
                tail++;
            }
            maxLenght = Math.max(maxLenght, (head - tail) + 1);
            head++;
        }

    }
    return maxLenght;
};

const nums = [1,2,1,2,1,2,1,2];
const k = 1;

const r = maxSubarrayLength(nums, k);
console.log(r);