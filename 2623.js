/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memoizeMap = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (memoizeMap.has(key)) return memoizeMap.get(key);
        const value = fn(args[0], args[1]);
        memoizeMap.set(key, value);
        return value;
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})

console.log(memoizedFn(2,23)) // 5
memoizedFn(2,23) // 5
console.log(callCount) // 1 
