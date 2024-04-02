/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    let rows = new Map();

    grid.forEach((value)=>{
        const row = value.join("|")+"|";
        rows.set(row, rows.get(row) + 1 || 1);
    });
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let column = "";
        for (let j = 0; j < n; j++) {
            column += grid[j][i]+"|";
        }
        if(rows.has(column)) sum += rows.get(column);
    }

    return sum;
};

const grid = [[11,1],[1,11]];
const r = equalPairs(grid);
console.log(r);

// 13 13
// 13 13