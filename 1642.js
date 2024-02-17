/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let furthest = 0;
    let i = 0;
    furthest = recursiveFurthestBuilding(i, furthest, heights, bricks, ladders);
    return furthest;
};

function recursiveFurthestBuilding(i, furthest, heights, bricks, ladders) {
    const remainingDeg = heights[i + 1] - heights[i];
    if (isNaN(remainingDeg)) {
        return furthest;
    }
    if (heights[i] >= heights[i + 1]) {
        furthest++;
        i++;
        return recursiveFurthestBuilding(i, furthest, heights, bricks, ladders);
    }
    if (heights[i] < heights[i + 1] && useMaterial(bricks, remainingDeg) === false && ladders > 0) {
        ladders = useMaterial(ladders, 1);
        furthest++;
        i++;
        return recursiveFurthestBuilding(i, furthest, heights, bricks, ladders);
    }
    if (heights[i] < heights[i + 1] && useMaterial(bricks, remainingDeg) && ladders == 0) {
        bricks = useMaterial(bricks, remainingDeg);
        furthest++;
        i++;
        return recursiveFurthestBuilding(i, furthest, heights, bricks, 0);
    }

    if (heights[i] < heights[i + 1] && useMaterial(bricks, remainingDeg) === false && ladders == 0) return furthest;

    i++;
    furthest++;
    return Math.max(recursiveFurthestBuilding(i, furthest, heights, useMaterial(bricks, remainingDeg), ladders), recursiveFurthestBuilding(i, furthest, heights, bricks, useMaterial(ladders, 1)));

}

function useMaterial(currentQuantity, neddedQuamtity) {
    if (currentQuantity < neddedQuamtity) return false;
    return currentQuantity - neddedQuamtity;
}