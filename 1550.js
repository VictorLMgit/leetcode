/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let count = 0;
    for (const el of arr) {
        if (el % 2 !== 0) count++;
        else count = 0;
        if (count == 3) return true;
    }
    return false;
};

const arr = [1,1,1];
const r = threeConsecutiveOdds(arr);
console.log(r);