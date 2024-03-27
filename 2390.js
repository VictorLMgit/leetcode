/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const splitedString = s.split("");
    let ans = [];

    for (const char of splitedString) {
        if (char !== "*") {
            ans.push(char);
            continue;
        }
        if (ans.length > 0) {
            ans.pop();
        }
    }

    return ans.join('');
};


const s = "leet**cod*e";
const r = removeStars(s);
console.log(r);