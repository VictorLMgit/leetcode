/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let maxPathValue = root.val;
    let goodNodes = [];
    dfs(root, maxPathValue, goodNodes);
    
    return goodNodes.length;
};
var dfs = function(node, maxPathValue, goodNodes){

    if(node == null) return;

    if(node.val >= maxPathValue){
        goodNodes.push(node.val);
        maxPathValue = node.val;
    }

    dfs(node.left, maxPathValue, goodNodes);
    dfs(node.right, maxPathValue, goodNodes);
}
