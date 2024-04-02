/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   let isomorphicMap = new Map();
   let mapS = new Map();
   let mapT = new Map();
   for (let i = 0; i < s.length; i++) {
        if (isomorphicMap.get(s[i])!== undefined && t[i] !== isomorphicMap.get(s[i])) return false;
        mapS.set(s[i], mapS.get(s[i]) +1 || 1);
        mapT.set(t[i], mapT.get(t[i]) +1 || 1);
        isomorphicMap.set(s[i], t[i]);
   }
   return mapS.size == mapT.size;
};


const s = "egg", t = "add";
const r = isIsomorphic(s,t);
console.log(r);