
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let headL1 = l1;
    let headL2 = l2;
    let currl1 = headL1;
    let currl2 = headL2;
    let resultHead = new ListNode();
    let currResult = resultHead;
    let plusOne = false;
    while (currl1 !== null || currl2 !== null) {
        let sum = 0;
        if (currl1 == null)  sum = currl2.val;
        else if (currl2 == null)  sum = currl1.val;
        else sum = currl1.val + currl2.val;
        if (plusOne) sum++;
        if (sum >= 10) {
            plusOne = true;
            sum = sum % 10;
        } else plusOne = false;

        currResult.next = new ListNode(sum, null);
        currResult = currResult.next;
        currl1 = currl1 == null ? null : currl1.next;
        currl2 = currl2 == null ? null : currl2.next;   
    }
    if (plusOne) currResult.next = new ListNode(1, null);    
    return resultHead.next;
};