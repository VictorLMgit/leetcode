/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    jewels = new Set(jewels.split(""));
    let count = 0;
    for (let i = 0; i < stones.length; i++) if (jewels.has(stones[i])) count++;
    return count
};

numJewelsInStones("aA", "aAAbbbb");