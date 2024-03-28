/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  
    if (n == 1) return "1";
    return countAndSayVal(countAndSay(n-1));

};

/**
 * @param {string} n
 * @return {string}
 */
var countAndSayVal = function(val) {

    let counter = 1;
    let say = "";
    for (let i = 0; i <= val.length - 1; i++) {

        if (val[i] == val[i+1]) {
            counter++;
            continue;
        }
        say += counter + val[i];
        counter = 1;
    }
    return say;
}

console.log(countAndSay(4));