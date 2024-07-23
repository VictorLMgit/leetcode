/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let map = {}
    s = s.split(" ");
    
    if (pattern.length !== s.length) return false;
    
    let words = new Set()
    for (let i = 0; i < pattern.length; i++) {
       
        if(map[pattern[i]] !== undefined && map[pattern[i]] != s[i]) return false;
        
        if (map[pattern[i]] !== undefined && map[pattern[i]] == s[i]) continue;
        
        if(words.has(s[i])) return false;

        words.add(s[i]);
        map[pattern[i]] = s[i];
    }

    return true;
};

const pattern = "abba", s = "dog cat cat dog";
const r = wordPattern(pattern, s);
console.log(r);