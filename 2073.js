/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    
    let countTime = 0;

    while(tickets[k] > 0){
        countTime++;
        tickets[0]--;
        const curr = tickets.shift();
        k = k == 0 ? tickets.length : --k; 
        if (curr == 0) {
            continue;
        }
        tickets.push(curr);
        
    }
    return countTime;

};

const tickets = [2,3,2], k = 2;
const r = timeRequiredToBuy(tickets, k);
console.log(r);