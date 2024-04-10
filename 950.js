/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    
    let deckDecreasing = deck.sort((a,b)=>b-a); 
    let deckRevealedIncreasing = [];
    deckRevealedIncreasing.push(deckDecreasing.shift());
    while (deckDecreasing.length > 0) {
        const curr = deckDecreasing.shift();
        const lastRevealed = deckRevealedIncreasing.pop();
        deckRevealedIncreasing.unshift(lastRevealed);
        deckRevealedIncreasing.unshift(curr);
    }
    return deckRevealedIncreasing;
};

const deck = [17,13,11,2,3,5,7];
const r = deckRevealedIncreasing(deck);
console.log(r);