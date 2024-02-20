/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let aux = 0; 
    let max = aux;
    for (let i = 0; i <= s.length; i++) {
   
        if (aux > max) max = aux;
        if (max == k) return max;
        if (isVowel(s[i]) && !isVowel(s[i-k])) {
            aux++;
            continue;
        }
        if (!isVowel(s[i]) && isVowel(s[i-k])) {
            aux--;
            continue;
        }
        if (aux > max) max = aux;
        
    }
    return max;
};

function isVowel(char) {
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u') return true;
    return false;
}



const s = "abciiidef";
const k = 3;
const r = maxVowels(s, k);
console.log(r);