/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {   
    if (trust.length == 0 && n == 1) return 1;
    let trusted = {};
    let peoples = {};
    let judge = -1;
    for(let i = 0; i < trust.length ; i++){
        peoples[trust[i][0]] = true;
        if (trusted[trust[i][1]] === undefined) {
            trusted[trust[i][1]] = 1;
            if(trusted[trust[i][1]] == n-1) judge = trust[i][1];
            continue;
        }
        trusted[trust[i][1]]++;
        if(trusted[trust[i][1]] == n-1) judge = trust[i][1];
    } 
    return (judge != -1 && peoples[judge] === undefined) ? judge : -1;
};


const n = 1, trust = [];
console.log(findJudge(n, trust));