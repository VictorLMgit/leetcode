class Solution:

    def __init__(self):
        self.alphabet = "abcdefghijklmnopqrstuvwxyz"
        self.stringValues = {
            ch:i for i, ch in enumerate(self.alphabet)
        }

    def stringHash(self, s: str, k: int) -> str:
        ans = []
        
        for i in range(len(s)//k):
            hashValue = self.hashSubstring(s[i*k:(i+1)*k])
            ans.append(hashValue)

        return "".join(ans)

    def hashSubstring(self,substr):
        s = sum([self.stringValues[x] for x in substr])
        rest = s % 26
        return self.alphabet[rest]
        
