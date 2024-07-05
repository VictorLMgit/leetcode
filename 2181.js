
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    
    let curr = head;
    let sum = 0;
    let headAns = new ListNode(0, null);
    let currAns = headAns;
    while(curr !== null){
        if(curr.val !== 0){
            sum+=curr.val;
            curr = curr.next;
            continue;
        } 
        const newNode = new ListNode(sum, null);
        currAns.next = newNode;
        currAns = currAns.next
        sum = 0;
        curr = curr.next;
    }

    return headAns.next;
};

const a1 = new ListNode(0, null);
const a2 = new ListNode(2, a1);
const a3 = new ListNode(5, a2);
const a4 = new ListNode(4, a3);
const a5 = new ListNode(0, a4);
const a6 = new ListNode(1, a5);
const a7 = new ListNode(3, a6);
const head = new ListNode(0, a7);

const r = mergeNodes(head);
console.log(r.val);