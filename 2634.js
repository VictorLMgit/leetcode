/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtedValues = [];
    arr.forEach((n, i)=>{
        if (fn(n, i)) filtedValues.push(n)
    });
    return filtedValues;
};



function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1 }
const arr = [-1,10,20,30];

console.log(filter(arr, firstIndex));