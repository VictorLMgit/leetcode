/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefixSum = 0;
    let max = 0;
    for (let i = 0; i < gain.length; i++) {
        prefixSum += gain[i];
        if (prefixSum > max) max = prefixSum;
    }

    return max;
};

const gain = [-5,1,5,0,-7];

console.log(largestAltitude(gain));