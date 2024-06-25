/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach((curr)=>{
        let currSorted = curr.split('').sort().join('');
        if(map.has(currSorted))
            map.set(currSorted , [curr, ...map.get(currSorted)])
        else
            map.set(currSorted , [curr])
    })
    return (Array.from(map.values()))

};