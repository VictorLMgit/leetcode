/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    let countOpen = 0;
    let leftString = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ")" && countOpen == 0) {
            continue;
        }

        if (s[i] == ")") countOpen--;
        

        if (s[i] == "(") countOpen++;
        

        leftString += s[i];
        
    }

    if(countOpen == 0) return leftString;
    console.log(leftString);
    console.log(countOpen);
    let validString = [];

    for (let i = leftString.length - 1;  i >= 0;  i--) {

        if (leftString[i] == "(" && countOpen > 0) {
            countOpen--;
            continue;
        }

        validString.push(leftString[i]);
    }

    return validString.reverse().join("");
};

const s = "(())((((((((()()()((()())((()))))))))(((";
const r = minRemoveToMakeValid(s);
console.log(r);