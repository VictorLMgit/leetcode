/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return getBaseLog(3,n)
};

function getBaseLog(x, y) {
    let val = (Math.log(y) / Math.log(x)).toFixed(12);
    val = parseFloat(val);
    return Number.isInteger(val);
}

const n = 27;
console.log(getBaseLog(3,27));