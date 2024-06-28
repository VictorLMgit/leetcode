/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let maps = [];
    for (let i = 0; i < words.length; i++) {
        let mapI = new Map();
        for (let j = 0; j < words[i].length; j++) 
            mapI.set(words[i][j], mapI.get(words[i][j]) + 1 || 1);
        maps.push(mapI); 
    }
    let commom = maps.shift();
    for (const map of maps) {
        let ncommom = new Map();
        commom.forEach((v,k)=>{
            if (map.has(k)) ncommom.set(k, Math.min(map.get(k), v))
        })
        commom = ncommom;
    }

    result = [];
    commom.forEach((v,k) => {
        for (let i = 0; i < v; i++) {
            result.push(k);
        }
    })

    return result;
};

const words = ["cool","lock","cook"];
const r = commonChars(words);
console.log(r);