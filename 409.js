/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    let map = new Map();
    for (let i = 0; i < s.length; i++) map.set(s[i], map.get(s[i]) + 1 || 1);
    let longest = 0;
   
    map.forEach((val)=>{
        longest += (val % 2 == 0) ? val : val - 1;
    })
    longest = s.length - longest != 0 ? longest + 1 : longest;
    return longest;
};

const s = "abccccdd";
const r = longestPalindrome(s);
console.log(r);
