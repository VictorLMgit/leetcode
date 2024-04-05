/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let goodStr = [];
    for (let i = 0; i < s.length; i++) {
        if(goodStr.length > 0 && isOppositeCase(goodStr[goodStr.length - 1] , s[i])){
            goodStr.pop();
            continue;
        }
        goodStr.push(s[i]);
    }

    return goodStr.join("");
};
/**
 * @param {string} s
 * @return {boolean}
 */
function isOppositeCase(char1, char2) {
    return (char1.toUpperCase() === char2 && char2.toLowerCase() === char1) ||
           (char1.toLowerCase() === char2 && char2.toUpperCase() === char1);
}


console.log(isOppositeCase("A","a"));
