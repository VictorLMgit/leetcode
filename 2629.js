/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) { 
        let res = x;
        for (let i = functions.length-1; i >= 0; i--) {
            const func = functions[i];
            res = func(res);
        }
        return res;
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)) // 9
