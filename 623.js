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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    let rootRef = root;
    var dfs = function(node,val,depth,currDepth){
        if(depth == 1){
            return rootRef = new TreeNode(val, node, null);
        }
    
        if (node == null) return;
        if (currDepth == depth - 1 || depth == 1 ) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
        }
        dfs(node.left, val, depth, currDepth+1);
        dfs(node.right, val, depth, currDepth+1);
    }
    dfs(root, val, depth, 1);
    return rootRef;
};

