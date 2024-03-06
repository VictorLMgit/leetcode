/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const exp = strs[0];
    // if (exp == "") return "";
    // if (strs.length == 1) return exp;
    let prefix = "";
    let stop =false;
    for (let i = 0; i < exp.length; i++) {
        strs.forEach(str=>{
            if (str[i] !== exp[i]) {
                stop = true;
            }
        });
        if (!stop && exp[i] !== undefined) {
            
            prefix += exp[i];
            continue;
        }
        break;
    }
    return prefix;
};

const strs = ["a"];
const r = longestCommonPrefix(strs);
console.log(r);