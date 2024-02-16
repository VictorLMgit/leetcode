/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    
    let hashTable = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (hashTable[arr[i]] != undefined) {
            hashTable[arr[i]]++;
            continue;
        }
        hashTable[arr[i]] = 1
    }
    let values = Object.values(hashTable);
    values.sort((a,b)=>a-b);
    let removedElements = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > k) return values.length - removedElements;
        k -= values[i];
        removedElements++;
    }
    return values.length - removedElements;
};


const arr = [4,3,1,1,3,3,2];
const k = 3;
console.log(findLeastNumOfUniqueInts(arr, k));