var searchBST = function(root, val) {
    return dfs(root, val);  
};

var dfs = function(node, tg) {
    if(node == null) return null;
    if(node.val == tg) return node;
    if(node.val < tg) return dfs(node.right, tg);
    return dfs(node.left, tg);
}
