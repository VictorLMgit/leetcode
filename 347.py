class Solution:
    def topKFrequent(self, nums: List[int], k: int):
        map = {}
        for i in nums:
            if i in map:
                map[i] = map[i] + 1
                continue
            map[i] = 1
        sortedMapKeys = [k for k, v in sorted(map.items(), key=lambda item: item[1])]

        return sortedMapKeys[-k:]
