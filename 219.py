class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hashMap = {}
        pos = -1
        for n in nums:
            pos += 1
            if n in hashMap:
                hashMap[n].append(pos)
                continue
            hashMap[n] = [pos]

        for _,v in hashMap.items():
            lenV =len(v) 
            if lenV > 1 and self.minDistance(v,k):
                return True

        return False

    def minDistance(self, nums, k):
        p1 = 0
        p2 = 1
        while p2 < len(nums):
            if nums[p2] - nums[p1] <= k:
                return True
            p1 += 1
            p2 += 1
        return False
