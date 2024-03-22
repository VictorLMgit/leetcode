
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
    let curr = head;
    while(curr != null){
        stack.push(curr.val);
        curr = curr.next;
    }
    let i = 0
    while(stack[i] !== undefined){
        console.log(stack[i]);
        if (stack[i] != stack.pop()) return false;
        i++;
    }
    return true;

};
const s = new ListNode(1);
const s1 = new ListNode(2,s);
const s12 = new ListNode(3,s1);
const s2 = new ListNode(2,s12);
const s3 = new ListNode(1,s2);

const nh = isPalindrome(s3);
console.log(nh);