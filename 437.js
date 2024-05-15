/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    let countPath = 0;

    var dfs = function(node, target){

        if (node == null) return;
        search(node, target);
        dfs(node.left, target);
        dfs(node.right, target);
    }

    var search = function(node, target) {

        if (node == null) return;
        if (node.val == target) countPath++;
        search(node.left, target-node.val);
        search(node.right, target-node.val);

    }

    dfs(root, targetSum);
    return countPath;
};

