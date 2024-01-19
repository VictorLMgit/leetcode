/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let operatedArr = [];
    arr.forEach((val, i)=>{
        operatedArr.push(fn(val, i));
    })
    return operatedArr;
};

fn = function plusone(n) { return n + 1; }
fn1 = function plusI(n, i) { return n + i; }
fn2 = function constant() { return 42; }

console.log(map([1,2,3], fn1));