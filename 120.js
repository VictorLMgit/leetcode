/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    
    let total = triangle[0][0];
    let currIndex = 0;
    for (let i = 1; i < triangle.length; i++) {
        currIndex = triangle[i][currIndex] > triangle[i][currIndex+1] ? currIndex+1 : currIndex;
        total+=triangle[i][currIndex];
    }
    return total;
};

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
const r = minimumTotal(triangle);
console.log(r);