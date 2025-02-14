class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        
        stack = []
        lenOfPart = len(part)
        lastWordPart = part[lenOfPart-1]
        for c in s:
            stack.append(c)
            if c == lastWordPart:
                aux = "".join(stack[-lenOfPart:])
                if aux == part:
                    stack = stack[:-lenOfPart]
        return "".join(stack)
        
