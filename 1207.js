/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashMap = {};
    arr.forEach((e)=>{
        if (e in hashMap) {
            hashMap[e]++;
            return;
        }
        hashMap[e] = 1;
    })
  
    let ocor = [];
    Object.values(hashMap).forEach(value => {
        if (ocor.indexOf(value) !== -1) {
            console.log(value);
            ocor.push(false);    
            return;
        }
        ocor.push(value);
    })
    
    return !(ocor.indexOf(false) !== -1);
    
};


console.log(uniqueOccurrences([1,2,2]));