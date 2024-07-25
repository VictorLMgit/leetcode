/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    return mergeSort(nums);

};

var mergeSort = function(array){

    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return mergeTwoSortedArray(
        mergeSort(left),
        mergeSort(right)
    );
    
}

var mergeTwoSortedArray = function (a1, a2) {

    let sortedArray = [];
    i=0;
    j=0;
    while (true) {
        if (a1[i] === undefined && a2[j] === undefined) break;
        if (a1[i] === undefined || a1[i] >= a2[j]) {
            sortedArray.push(a2[j]);
            j++;
            continue;
        }
        if (a2[j] === undefined || a2[j] > a1[i]){
            sortedArray.push(a1[i]);
            i++;
        }
    }
    return sortedArray;
};

const a1 = [1,12,14,2, 5, 17, 88,12];
const a2 = [2, 3, 9, 11];

console.log(sortArray(a1));