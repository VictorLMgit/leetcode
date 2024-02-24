/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxElement = -Infinity
    let ans = [];
    for (let i = 0; i < candies.length ; i ++) maxElement = Math.max(maxElement, candies[i]);
    for (let i = 0; i < candies.length; i++) ans.push((candies[i] + extraCandies) >= maxElement);
    return ans
};

const candies = [2,3,5,1,3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));