/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initial = init;
    return {
        increment:()=>{
            return ++init;
        },
        decrement:()=>{
            return --init;
        },
        reset:()=>{
            init = initial
            return init;
        },
    }
};

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());

console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
