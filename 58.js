/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " " && length == 0) continue; 
        if (s[i] == " " && length >= 0) break;
        length++;
    }

    return length;

};

const s = "a";
const r = lengthOfLastWord(s);
console.log(r);