var removeElements = function(head, val) {
    if(head == null) return null;
    let aux = new ListNode(0), curr = aux;
    aux.next = head;

    while (curr.next != null) {
        console.log(curr.val);
        if (curr.next.val == val) {
            curr.next = curr.next.next;
            continue;
        }
        curr = curr.next;
    }
    return aux.next;
};