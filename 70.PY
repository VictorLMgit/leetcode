class Solution:
    def climbStairs(self, n: int) -> int:
        
        result = self.fibMemoization(n, {})

        return result

    def fibMemoization(self, n:int, prevValues) -> int:
        if (n in prevValues): 
            return prevValues[n]
        
        if (n < 2):
            return 1
        
        prevValues[n] = self.fibMemoization(n - 1, prevValues) + self.fibMemoization(n - 2, prevValues)
        print(prevValues);
        return prevValues[n]
    
a = Solution()



print(a.climbStairs(46))

