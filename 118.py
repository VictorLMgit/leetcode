class Solution:
    def generate(self, numRows: int) :
        resp = [[1]]
        for i in range(1,numRows):
            resp.append(self.nextRow(resp[i-1]))
        return resp            

    def nextRow(self, row):
        newRow = [1]
        for i in range(len(row)-1):
            newRow.append(row[i] + row[i+1])
        newRow.append(1)
        return newRow
