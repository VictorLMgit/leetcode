/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    
    let powerNums = new Map();
    let repetedNumbers = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currPower = [];
        const splittedNumber = splitNumber(nums[i]);
        splittedNumber.forEach(e => {
            currPower.push(mapping[e]);
        });
        if (powerNums.get(nums[i]) === undefined) {

            powerNums.set(nums[i], Number.parseInt(currPower.join("")));
            continue;
        } 
        repetedNumbers.set(nums[i],repetedNumbers.get(nums[i]) + 1 || 2);
    }
    let mapArray = []
    const keys = Array.from(powerNums.keys());
    for (let i = 0; i < keys.length; i++) {
        if(repetedNumbers.get(keys[i])){
            for (let j = 0; j < repetedNumbers.get(keys[i]); j++) {
                mapArray.push([keys[i], powerNums.get(keys[i])]);
            }
            continue;
        }
        mapArray.push([keys[i], powerNums.get(keys[i])]);
    }
    mapArray.sort((a,b)=>a[1]-b[1]);
    return mapArray.map((n)=>n[0]);
};

var splitNumber = function(num){
    let splittedNumber = [];
    if (num == 0) return [0];
    while (num > 0) {
        const digit = num%10;
        splittedNumber.unshift(digit); 
        num = Math.floor(num/10);
    }
    return splittedNumber;
}

const mapping = [8,2,9,5,3,7,1,0,6,4], nums = [418,4191,916,948,629641556,574,111171937,28250,42775632,6086,85796326,696292542,186,67559,2167,366,854,2441,78176,621,4257,2250097,509847,7506,77,50,4135258,4036,59934,59474,3646243,9049356,85852,90298188,2448206,30401413,33190382,968234660,7973,668786,992777977,77,355766,221,246409664,216290476,45,87,836414,40952];
const r = sortJumbled(mapping,nums);
console.log(r);