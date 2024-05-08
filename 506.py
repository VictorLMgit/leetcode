class Solution(object):
    
    def findRelativeRanks(self, score):

        map = {
            1 : "Gold Medal",        
            2 : "Silver Medal",        
            3 : "Bronze Medal",        
        }
        sortedScore = sorted(score, reverse=True);
        places = [];
        for s in score:
            val = sortedScore.index(s) + 1
            place = map.get(val,val)
            places.append(str(place))

        return places

a = Solution()
print(a.findRelativeRanks([10,3,8,9,4]))