var maxDepth = function(root) {
    const depth = recursiveSearch(root);
    return depth;
};

var recursiveSearch = function(node){
    if(node == null) return 0;
    const left = 1 + recursiveSearch(node.left);
    const right = 1 + recursiveSearch(node.right);
    return Math.max(left,right);
}