/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(n)=>{
            if(n!==val) throw new Error("Not Equal");
            return true ;
        },
        notToBe:(n)=>{
            if(n===val) throw new Error("Equal");
            return true
        },
    }
};

console.log(expect(5).notToBe(5))


// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
