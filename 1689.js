/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    max = 0;
    for (let i = 0; i < n.length; i++) {
        max = Math.max(max, parseInt(n[i]));
    }

    return max;

};