import random
class Solution:
    def findDifferentBinaryString(self, nums) -> str:
        comparative = "".join(["0" for i in range(len(nums[0]))])
        visited = {}
        def dfs(comparative):
            if not comparative in nums:
                return comparative
            
            visited[comparative] = True
          
            while comparative in visited:
                comparative = "".join([str(random.randint(0,1)) for i in range(len(nums[0]))])
                

            return dfs(comparative)
            
        return dfs(comparative)
        
