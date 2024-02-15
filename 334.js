/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let t1 = Infinity; // menor do triplet
    let t2 = Infinity; // do meio do triplet
    let t3 = Infinity; // maior do triplet

    for (const num of nums) {
        if (num <= t1) t1 = num;
        else if(num <= t2) t2 = num;
        else if(num <= t3) t3 = num;
    }

    return t3 != Infinity;  
};

const nums = [2,1,5,0,6];
console.log(increasingTriplet(nums));