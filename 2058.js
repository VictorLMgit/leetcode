

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    
    let criticalPoints = [];
    let curr = head;
    let prev = curr.val;
    curr = curr.next;
    let i = 0;
    while (curr.next !== null) {
        i++;
        if (isCriticalPoint(prev, curr.val, curr.next.val)) criticalPoints.push(i);
        prev = curr.val;
        curr = curr.next;
    }

    if (criticalPoints.length < 2)  return [-1,-1]
    
    let minLen = 999999999;
    let maxLen = criticalPoints[criticalPoints.length-1] - criticalPoints[0];

    for (let i = 1; i < criticalPoints.length; i++) {
        const diff = criticalPoints[i] - criticalPoints[i-1];
        if (diff < minLen) minLen = diff;
    }

    return [maxLen, minLen];

};

var isCriticalPoint = (prev,curr,next) => (curr > prev && curr > next) || (curr < prev && curr < next)

const a1 = new ListNode(2, null);
const a2 = new ListNode(1, a1);
const a3 = new ListNode(5, a2);
const a4 = new ListNode(2, a3);
const a5 = new ListNode(1, a4);
const a6 = new ListNode(35, a5);
const a7 = new ListNode(5, a6);
// const head = new ListNode(, a7);

const r = nodesBetweenCriticalPoints(a7);
console.log(r);