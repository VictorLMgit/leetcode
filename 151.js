/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    s = s.split(" ");
    s = s.filter(el => el !== "");
    let p1 = 0;
    let p2 = s.length -1;
    
    while (p1 <= p2) {
        const aux = s[p1];
        s[p1] = s[p2];
        s[p2] = aux; 
        p1++;
        p2--;
    }

    return s.join(" ");
};

const ph = "a good   example";
console.log(reverseWords(ph));