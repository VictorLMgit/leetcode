/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x ==0 )return 0;
    let reversedNumber = "";
    let temp = Math.abs(x);
    while (temp >= 1) {
        reversedNumber += temp%10;
        temp = Math.floor(temp/10);
    }
    if (reversedNumber > (2**31)) return 0;
    return x>0?reversedNumber:"-"+reversedNumber;

};