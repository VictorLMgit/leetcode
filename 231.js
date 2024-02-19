/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    return (n > 0) && ((n & (n - 1)) === 0);
};


/**
* @param {number} n
* @return {boolean}
*/
var isPowerOfTwo = function (n) {
    if (n == 0) return false;
    if (n == 1) return true;
    if (n % 2 == 1 || n < 0) return false;

    const bits = n.toString(2)
    let count = 0;
    let i = 0;
    let j = bits.length - 1
    while (i <= j) {
        if (bits[i] == 1) count++;
        if (bits[j] == 1) count++;
        if (count > 1) return false;
        i++;
        j--;
    }
    return true;
};


