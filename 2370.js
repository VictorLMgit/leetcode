/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
    const alphabetMap = {};

    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        alphabetMap[letter] = i + 1;
    }
    let sum = 0;
    let map = {};
    var calculate = function (curr, remaining, k , map) {

        console.log(remaining);
        if (remaining.length == 1) {
            map[remaining[0]] = 1;
            return;
        }; 
        
        map[remaining] = alphabetMap[curr] + calculate(remaining[0], remaining.slice(1), k , map);

    }

    calculate(s[0], s.slice(1), k, map);
    console.log(map);
    return sum;
};




const s = "acfgbd", k = 2;
const r = longestIdealString(s, k);
console.log(r);