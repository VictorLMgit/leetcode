/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    let map = {};

    for (let i = 0; i < heights.length; i++) {
        map[heights[i]] = names[i];
    }

    const sortedHeights = heights.sort((a,b)=>b-a);
    sortedPeople = [];
    for (let i = 0; i < sortedHeights.length; i++) {
        sortedPeople.push(map[sortedHeights[i]]);
        
    }
    return sortedPeople;


};

const names = ["Alice","Bob","Bob"], heights = [155,185,150];
const r = sortPeople(names, heights);
console.log(r);