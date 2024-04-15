/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    
    c = [];
    t = [];
    dfs(root, c,t);
    sum = 0;
    for(val of t) sum += parseInt(val);
    return sum;

};

var dfs = function(node, c, t) {
    if(node == null) return;
    if(node.left == null && node.right == null){
        c.push(node.val);
        t.push(c.join(""));
        c.pop();
        return;
    }

    c.push(node.val);
    dfs(node.left, c, t);
    dfs(node.right, c, t);
    c.pop();
}