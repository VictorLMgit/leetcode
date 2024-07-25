var addDigits = function (num) {


    var recursiveSum = function (sum) {
        if (sum < 10) return sum;
        const newSum = sumDigits(sum);
        return recursiveSum(newSum);
    }

    return recursiveSum(num);

};

var sumDigits = function (num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        num = Math.floor(num / 10);
        sum += digit;
    }
    return sum
}
const num = 38;
const r = addDigits(num);
console.log(r);