/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const rightPass = m-1;
    const downPass = n-1;
    const totalPass = rightPass + downPass;
    const first = Math.min(rightPass, downPass);
    const second = Math.max(rightPass, downPass);
    let memo = new Map();
    
    var dp = function(n, memo){
        if(n == 1 || n == 0) return 1;
        if(memo.has(n)) return memo.get(n);
        memo.set(n, n * dp(n-1, memo));
        return memo.get(n);

    }

    let r = dp(first, memo);
    let l = dp(second, memo);
    let k = dp(totalPass, memo);

    return k / (r * l);
};

const m = 3, n = 7;
const r = uniquePaths(m,n);
console.log(r);