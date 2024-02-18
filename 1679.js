
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let qtdOp = 0;
    let i = 0; 
    let j = nums.length-1;
    nums.sort((a,b)=>a-b);
    while(i<j){
        const sum = nums[i] + nums[j];
        if(sum == k ){
            qtdOp++;
            i++;
            j--;
            continue;
        } 
        if(sum > k){
            j--;
            continue;
        }
        // sum < k
        i++;

    } 
    return qtdOp;
};



const nums = [4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], k = 2;
console.log(maxOperations(nums,k));
