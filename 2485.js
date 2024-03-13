/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if (n == 1) return n;
    let historicSum = [];
    let prefixSum = 0;

    for (let i = 1; i <= n; i++) {
        prefixSum += i;
        historicSum.push(prefixSum);
    }
    prefixSum = 0;
    for (let i = n-1; i >= 1; i--) {
        prefixSum += i+1;
        if (prefixSum - historicSum[i] == 0)  return i+1;
    }
    return -1;
};

const r = pivotInteger(8);
console.log(r);