/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
 
    return  n > 0 ? recursivePow(x,Math.abs(n)) : 1/recursivePow(x,Math.abs(n));

};

var recursivePow = function(x, n){
    if (n == 0) return 1;
    if (n == 1) return x;
    if (n%2== 0) return recursivePow(x*x, n/2);
    return x * recursivePow(x*x , (n-1)/2);
}



console.log(myPow(2,12));