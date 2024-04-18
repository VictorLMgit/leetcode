/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    return dfs(grid, 0, new Set(), 0);
};
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {Set} topAdjacentsSquares
 * @param {number} total
 * @return {number}
 */
var dfs = function(grid, row, topAdjacentsSquares, total){
    if(!grid[row]) return total;
    let tempTopAdjacentsSquares = new Set();
    for (let j = 0; j < grid[row].length; j++) {
        
        if(grid[row][j] == 1) {
            tempTopAdjacentsSquares.add(j);
            total+=4
            if(grid[row][j+1] !== undefined && (grid[row][j] == 1 && grid[row][j+1] == 1)) total--;
            if(grid[row][j-1] !== undefined && (grid[row][j-1] == 1 && grid[row][j] == 1)) total--;
            if(topAdjacentsSquares.has(j)) total-=2;
        }

    }
    return dfs(grid, row+1, tempTopAdjacentsSquares, total);
}

const grid = [[1,0]];
const r = islandPerimeter(grid);
console.log(r);