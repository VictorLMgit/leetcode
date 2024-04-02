// Take both pointers to the middle of the array, 
// with the 'slow' pointer further to the right and 'prev' 
// being the head of a reversed list from the middle to the first element of the original list. 
// Then simply traverse the remaining list with the 'slow' pointer and the reversed list with 'prev'.
var pairSum = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let result = 0;

    while (slow) {
        result = Math.max(result, slow.val + prev.val);
        slow = slow.next;
        prev = prev.next;
    }

    return result;
};