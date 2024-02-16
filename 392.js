/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pS = 0;
    for (let i = 0; i < t.length; i++) if (s[pS] == t[i]) pS ++
    return pS == s.length;
};


const s = "abc"
const t = "ahbgdc"

console.log(isSubsequence(s,t));