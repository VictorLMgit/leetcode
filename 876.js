
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var middleNode = function(head) {
    
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

};

// var middleNode = function(head) {
    
//     let current = head;
//     let listSize = 0;
//     while (current != null){
//         current = current.next;
//         listSize++;
//     }

//     let limit = listSize %2 == 0 ? listSize/2 :  listSize/2 - 1
//     let i = 0;
//     current = head;
//     while(i < limit){
//         current = current.next;
//         i++;
//     }

//     return current;

// };