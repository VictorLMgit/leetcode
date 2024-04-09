var leafSimilar = function(root1, root2) {
    let leafs1 = [];
    let leafs2 = [];
    dfs(root1, leafs1);
    dfs(root2, leafs2);
    if(leafs1.length !== leafs2.length) return false;
    for(let i = 0; i < leafs1.length ; i++) if(leafs1[i] !== leafs2[i]) return false;
    return true;
};

var dfs = function(node, leafs){
    if(node == null) return;
    if(node.left == null && node.right == null) {
        leafs.push(node.val);
        return;
    }
    dfs(node.left, leafs);
    dfs(node.right, leafs);

    return leafs;
}