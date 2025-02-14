class ProductOfNumbers:

    def __init__(self):
        self.listNums = []
        self.mult = 1

    def add(self, num: int) -> None:

        if num == 0:
            self.listNums = []    
            self.mult = 1
            return

        self.listNums.append(self.mult)
        self.mult = self.mult * num

    def getProduct(self, k: int) -> int:
        if len(self.listNums) < k:
            return 0 
        return self.mult // self.listNums[-k]
