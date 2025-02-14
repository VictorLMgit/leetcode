class Solution:
    def clearDigits(self, s: str) -> str:
        stack = []
        for c in s:
            if not c.isdigit():
                stack.append(c)
                continue
            if(len(stack)>0):
                stack.pop()

        return ''.join(stack)
