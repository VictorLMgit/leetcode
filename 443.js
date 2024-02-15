/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let currentChar = chars[0];
    let s = currentChar;
    let countCurrentChar = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] == currentChar) {
            countCurrentChar++;
        } else {
            if (countCurrentChar > 1 ) s+=countCurrentChar.toString();
            currentChar = chars[i];    
            
            s+=currentChar;
            countCurrentChar = 1;
        }
    }
    if (countCurrentChar > 1 ) s+=countCurrentChar.toString();
    
    for (let i = 0; i < s.length; i++) {
       chars[i] = s[i];
    }
    return s.length;
};

const chars = ["a","a","b","b","c","c","c"];
console.log(compress(chars));