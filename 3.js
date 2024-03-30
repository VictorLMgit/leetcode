/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Set();
    let longestSubstring = 0;
    let tempLongestSubstring = 0;
    let i = 0;
    let firstOccour = 0;
    while(firstOccour < s.length){
        if (!map.has(s[i]) && s[i] !== undefined) {
            console.log(s[i]);
            map.add(s[i]);
            tempLongestSubstring++;
            i++;
            continue;
        }
        firstOccour++;
        i = firstOccour;
        if (tempLongestSubstring > longestSubstring) longestSubstring = tempLongestSubstring;
        tempLongestSubstring = 0;
        map.clear();
    }
    if (tempLongestSubstring > longestSubstring) longestSubstring = tempLongestSubstring;
    return longestSubstring;
};

const s = "dvdf";
const r = lengthOfLongestSubstring(s);
console.log(r);