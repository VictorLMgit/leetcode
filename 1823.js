/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    
    let players = [];
    for (let i = 1; i <= n; i++)
        players.push(i);

    let currIndex = 1;
    while(players.length > 1){
        console.log(players);
        if (currIndex !== k) {
            const currPlayer = players.shift();
            players.push(currPlayer);
            currIndex++;
            continue;
        }
        players.shift();
        currIndex = 1;
    }
    return players[0];
};


const n = 5, k = 2;
const r = findTheWinner(n,k);
console.log(r);