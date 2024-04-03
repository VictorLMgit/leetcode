/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    
    let qeue = senate.split("");
    let bans = new Map();
    bans.set("R",0);
    bans.set("D",0);
    let banRule = new Map();
    banRule.set("R","D");
    banRule.set("D","R");

    let i = 0;
    while (i !== qeue.length) {
        if (bans.get(qeue[0]) > 0) {
            bans.set(qeue[0], bans.get(qeue[0]) - 1);
            qeue.shift();
            i = 0;
            continue;
        }
        bans.set(banRule.get(qeue[0]), bans.get(banRule.get(qeue[0])) + 1);
        qeue.push(qeue[0]);
        qeue.shift();
        i++;
    }

    return qeue[0] == "D" ? "Dire" : "Radiant";

};


const senate = "RDDDRRDR";
const r = predictPartyVictory(senate);
console.log(r);