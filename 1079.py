class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        lettersMap = self.lettersFreq(tiles)
        return self.dfs(lettersMap) - 1
        
    def dfs(self,lettersMap):
        s = 1
        for k, v in lettersMap.items():
            if v == 0:
                continue
                
            lettersMap[k] -= 1
            s += self.dfs(lettersMap)
            lettersMap[k] += 1
            
        return s
                
    def lettersFreq(self, word):
        hashMap = {}
        for w in word:
            if not w in hashMap:
                hashMap[w] = 0
            hashMap[w] += 1
            
        return hashMap
