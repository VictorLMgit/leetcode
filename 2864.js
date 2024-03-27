/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const sLen = s.length;
    let countOnes = s.split('').reduce((acc, val)=>{
        if(val == "1") return acc + 1;
        return acc;
    }, 0)
    let ans = "";
    for (let i = 0; i < sLen - 1; i++) {
        if(countOnes > 1){
            ans += "1";
            countOnes--;
            continue;
        }
        ans+="0";
        
    }
    return ans + "1";
};

const s = "0101";
const r = maximumOddBinaryNumber(s);
console.log(r);