/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && s[i] == "(") stack.pop();
        if (s[i] == ")") stack.push(")");   
    };
    return stack.length;
}
