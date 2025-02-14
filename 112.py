class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        return self.dfs(root, 0, targetSum)
        
    def dfs(self, node, somatory, tg):

        if(node is None):
            return False

        somatory = somatory + node.val

        if(somatory == tg and node.left == None and node.right == None):
            return True

        return self.dfs(node.left, somatory, tg)  or self.dfs(node.right, somatory, tg)
            
        
