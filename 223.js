/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    
    const a1 = computeIndividualArea(ax1, ay1, ax2, ay2);
    const a2 = computeIndividualArea(bx1, by1, bx2, by2);
    const total = a1 + a2;
    if (!hasIntercession(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2)) return total;
    return total - calculateIntercessionArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);

};

var computeIndividualArea = function(x1, y1, x2, y2){
    const b = calculateLength(x1, x2);
    const h = calculateLength(y1, y2);
    return calculateRetangleArea(b,h);
}

var calculateIntercessionArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => 
    calculateRetangleArea( 
        calculateLength(Math.min(ax2, bx2), Math.max(ax1, bx1)),
        calculateLength(Math.min(ay2, by2), Math.max(ay1, by1))
    );

var hasIntercession = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2 ) => (ax2 > bx1 && ay1 < by2 && ax1 < bx2 && ay2 > by1)
var calculateRetangleArea = (b, h) => b*h;
var calculateLength = (a,b) => Math.abs(a-b);


const ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -3, by1 = -3, bx2 = -2, by2 = -2;

const r = computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
console.log(r);