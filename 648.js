/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    
    const splitedSentence = sentence.split(" ");
    for (const word of dictionary) {
        for (let i = 0; i < splitedSentence.length; i++) {
            if (splitedSentence[i].substring(0, word.length) == word) splitedSentence[i] = word;
        }
    }

    return splitedSentence.join(" ");

};


const dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery";
const r = replaceWords(dictionary, sentence);
console.log(r);