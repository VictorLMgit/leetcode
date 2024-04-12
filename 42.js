/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let n = height.length;
    if (n == 0) return 0;
    
    let prefixSum = [];
    let postFixSum = [];
    prefixSum[0] = height[0];
    for (let i = 1; i < n; i++) {
        prefixSum[i] = Math.max(prefixSum[i - 1], height[i]);
    }
    
    postFixSum[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        postFixSum[i] = Math.max(postFixSum[i + 1], height[i]);
    }
    
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let minHeight = Math.min(prefixSum[i], postFixSum[i]);
        ans += minHeight - height[i];
    }
    
    return ans;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1];
const r = trap(height);
console.log(r);