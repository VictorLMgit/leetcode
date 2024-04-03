/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n = board.length;
    const m = board[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
           let r = backTracking(i,n,j,m,0,word, board);
           if (r) return true;
        }
    }

    return false;
};

var backTracking = function(i,n,j,m,currentIndex, word, board){

    if(currentIndex == word.length) return true;
    if (i>=n || i < 0 || j>=m || j<0 || word[currentIndex] !== board[i][j] ) return false;

    const aux = board[i][j];
    board[i][j] = null;
    const r = backTracking(i+1, n, j, m, currentIndex+1, word, board) || backTracking(i-1, n, j, m, currentIndex+1, word, board) || 
    backTracking(i, n, j+1, m, currentIndex+1, word, board) || backTracking(i, n, j-1, m, currentIndex+1, word, board);
    board[i][j] = aux;
    return r;
}

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const w = "ABC";
const r = exist(board, w);
console.log(r);