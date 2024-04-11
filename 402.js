/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let ans = [];
    for (let i = 0; i < num.length; i++) {
        while (ans[ans.length - 1] > num[i] && k > 0) {
            k--;
            ans.pop();
        }
        
        if(ans.length == 0 && num[i] == "0") continue;

        ans.push(num[i]);
    }

    while(k>0){
        ans.pop();
        k--;
    }
    
    ans = ans.join("");
    return ans == "" ? "0" : ans;
};

const num = "10200", k = 1;
const r = removeKdigits(num, k);
console.log(r);