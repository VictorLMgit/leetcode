/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let i = 0, j = numbers.length-1;
    while (i<j) {
        if (numbers[i] + numbers[j] == target) return [i+1, j+1];
        if (numbers[i] + numbers[j] > target) {
            j--;
            continue;
        }
        i++;
    }
};

const numbers = [2,7,11,15], target = 9;
const r = twoSum(numbers, target);
console.log(r);