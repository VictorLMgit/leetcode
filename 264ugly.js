/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    let nth = 1;
    let i = 1;
    while(nth<n){
        i++;
        if(isUgly(i)) nth++;
    }

    return i;
};

var isUgly = function(n) {
    if(n <= 0) return false;
    while (Number.isInteger(n/2)) n = n/2;
    while (Number.isInteger(n/3)) n = n/3;
    while (Number.isInteger(n/5)) n = n/5;
    if (n>5) return false
    return true;
};

const n = 10;
const r = nthUglyNumber(n);
console.log(r);