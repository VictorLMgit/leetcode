class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        map = {}
        for n in nums:
            map[n] = True
        
        longestSeq = 1
        currSeq = longestSeq
        mem = {}
        for n in map:
            i = 1
            while True:
                if n+i in map and map[n+i] == True:
                    map[n+i] = False
                    if n+i in mem:
                        currSeq += mem[n+i]
                        break
                    currSeq += 1
                    i+=1 
                    continue
                break
            mem[n] = currSeq
            longestSeq = max(currSeq, longestSeq)
            currSeq = 1
        return longestSeq
