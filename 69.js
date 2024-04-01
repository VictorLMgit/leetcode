/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    return binarySearch(0,(x/2),x);
};

var binarySearch = function(init, end, tg){

    if (tg == 0 || tg == 1) return tg;
    const mid = Math.floor((init + end)/2);
    const val = mid * mid;
    const valNext = (mid+1) * (mid+1);
    if(val == tg || (val < tg && valNext > tg) ) return mid;
    if(val > tg) return binarySearch(init, mid - 1, tg);
    return binarySearch(mid+1 , end, tg);

}

const x = 1;
console.log(mySqrt(40));