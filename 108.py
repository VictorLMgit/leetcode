class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if(len(nums) == 0):
            return None
        return self.createBST(nums, 0, len(nums)-1)

    def createBST(self, nums, start, end):
        if(start>end):
            return None

        middle = (start+end)//2
        root = TreeNode(nums[middle])

        root.left = self.createBST(nums, start, middle-1)
        root.right = self.createBST(nums, middle+1, end)

        return root
