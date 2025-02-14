class Solution:
    def maximumSum(self, nums) -> int:
        digitSumToNum = {}
        for num in nums:
            r = self.digitSum(num)
            if r in digitSumToNum:
                digitSumToNum[r].append(num)
            else:
                digitSumToNum[r] = [num]
        
        avaiableComparare = [x for x in digitSumToNum if len(digitSumToNum[x]) > 1]

        if len(avaiableComparare) == 0:
            return -1

        maxSum = 0
        for i in avaiableComparare:
            currSum = self.maxSumTwoByTwoInArray(digitSumToNum[i])
            if maxSum < currSum:
                maxSum = currSum
        
        return maxSum
    
    def digitSum(self, num) -> int:
        sum = 0
        while num/10 > 0:
            sum += num % 10
            num = num // 10
        return sum
    
    def maxSumTwoByTwoInArray(self, nums):
        return sum(sorted(nums)[-2:])
