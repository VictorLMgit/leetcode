/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n <= 0) return false;
    while (Number.isInteger(n/2)) n = n/2;
    while (Number.isInteger(n/3)) n = n/3;
    while (Number.isInteger(n/5)) n = n/5;
    if (n>5) return false
    return true;
};

const n = 1;
const r = isUgly(n);
console.log(r);