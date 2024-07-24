

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null) return list2;
    if(list2 == null) return list1;



    let currL1 = list1;
    let currL2 = list2;
    let valHead = currL1.val > currL2.val ? list2 : list1;
    let head = new ListNode(valHead, null);
    let curr = head;
    while(currL1 !== null || currL2 !== null){
        if(currL1 == null) 
        {
            curr.next = currL2;
            break;
        }
        if(currL2 == null) {
            curr.next = currL1;
            break;
        }

        if(currL1.val < currL2.val){
            const val = currL1.val;
            curr.next = new ListNode(val, null);
            currL1 = currL1.next;
            curr = curr.next;
        } else {
            const val = currL2.val;
            curr.next = new ListNode(val, null);
            currL2 = currL2.next;
            curr = curr.next;
        }
        
    }
    
    return head;
};


const ae = new ListNode(4,null);
const a1 = new ListNode(2,ae);
const a2 = new ListNode(1,a1);

const be = new ListNode(5,null);
const b1 = new ListNode(3,be);
const b2 = new ListNode(1,b1);

let h = mergeTwoLists(a2,b2);

while (h !== null) {
    console.log(h.val);
    h = h.next;
    
}