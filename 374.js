/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    return binarySearch(0,n);
};

var binarySearch = function(init, end){
    const mid = Math.floor((init + end)/2);
    const hint = guess(mid);
    if (hint == 0) return mid;
    if (hint == 1) return binarySearch(mid+1, end);
    if (hint == -1) return binarySearch(init, mid-1);
}