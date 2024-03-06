/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;


    const mapWord1 = stringToMap(word1);
    const mapWord2 = stringToMap(word2);
    const valuesMap1 = Object.values(mapWord1).sort();
    const valuesMap2 = Object.values(mapWord2).sort();

    console.log(mapWord1);
    console.log(mapWord2);

    let interator = 0;
    for (const key in mapWord1) {
        if(!(key in mapWord2)) return false;
        if (valuesMap1[interator] != valuesMap2[interator]) return false;
        interator++;
    }

    return true;
};


/**
 * @param {string} word
 * @return {Object}
 */
function stringToMap(word){
    map = {};
    for (let i = 0; i < word.length; i++) {
        if (map[word[i]] !== undefined) {
            map[word[i]] += 1;
            continue;
        }
        map[word[i]] = 1;
    }

    return map;
}



const word1 = "uau", word2 = "ssx";
const r = closeStrings(word1,word2);
console.log(r);