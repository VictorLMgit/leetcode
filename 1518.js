/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {

    let ans = 0;
    let emptyBottles = 0;
    let fullBottles = numBottles;
    while(fullBottles >= 1){
        ans+=fullBottles;
        emptyBottles += fullBottles;
        fullBottles = Math.floor(emptyBottles/numExchange);
        emptyBottles = emptyBottles % numExchange; 
    }

    return ans;
};

var numWaterBottles = function(numBottles, numExchange) {

    return numBottles + Math.floor((numBottles-1)/(numExchange-1))

};



const numBottles = 15, numExchange = 4;
const r = numWaterBottles(numBottles, numExchange);
console.log(r);