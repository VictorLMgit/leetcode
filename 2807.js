/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let ansHead = new ListNode();
    let ansCurr = ansHead;
    let curr = head;

    while(curr.next !== null){
        ansCurr.next = new ListNode(curr.val);
        const a = curr.val;
        curr = curr.next;
        const b = curr.val;
        ansCurr = ansCurr.next;
        console.log(ansCurr.val);
        ansCurr.next = new ListNode(gcd(a,b));
    }
    return ansHead.next;
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

