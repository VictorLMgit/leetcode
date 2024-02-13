/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    s = s.split("");
    while (p1 <= p2) {
        if (isVogal(s[p1]) && isVogal(s[p2])) {
            const aux = s[p2];
            s[p2] = s[p1];
            s[p1] = aux;
            p1++;
            p2--;
        } else if (isVogal(s[p1]) && !isVogal(s[p2])) {
            p2--;
        } else if (!isVogal(s[p1]) && isVogal(s[p2])) {
            p1++;
        } else {
            p1++;
            p2--;
        }
    }
    return s.join('');
};

function isVogal(char) {
    return ['a','e','i','o','u'].find((element)=> element == char.toLowerCase()) === undefined ? false : true;
}


const str = "hello";
const s = reverseVowels(str);
console.log(s);