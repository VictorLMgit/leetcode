/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    if (digits[i] !== 9) {
        digits[i] = digits[i] + 1;
        return digits;
    }
    digits[i] = 10;
    while(digits[i] == 10){
        digits[i] = 0;
        if (digits[i-1] === undefined) {
            digits.unshift(1);
            break;
        }
        digits[i-1] = digits[i-1] + 1
        i--;
    }
    return digits;
};

const digits = [9,9,8,9]
const r = plusOne(digits);
console.log(r);