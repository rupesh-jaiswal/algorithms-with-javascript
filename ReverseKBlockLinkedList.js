const { LinkedList } = require('./LinkedList');

function getKPlusPOneThNode(k, head) {
    if(!head) {
        return head;
    }
    let i;
    let kth = head;
    for(i=0; kth && (i<k); i++, kth = kth.next);
    if(i==k && kth!==null) {
        return kth;
    }
    return null;
}
function hasKnodes(head, k) {
    let i=0;
    for(i=0; head && (i<k); i++, head=head.next);
    if(i==k) {
        return true;
    }
    return false;
}
function reverseBlockOfKNodesInLinkedList(head, k) {
    if(k==0 || k==1) {
        return head;
    }
    let cur = head, next, temp,newHead;

    if(hasKnodes(cur, k-1)) {
        newHead = getKPlusPOneThNode(k-1, cur);
    } else {
        newHead = head;
    }

    let temp2 = cur, temp3;
    while(cur ) {
        temp = getKPlusPOneThNode(k, cur);
        
        let i=0;
        while(i<k && cur) {
            if(i==0) {
                temp3 = cur;
            }
            next = cur.next;
            cur.next = temp;
            temp = cur;
            cur = next;
            i++;
        }
        temp2.next = temp;
        temp2 = temp3;
    }
    return newHead;
}
let linkedList = new LinkedList();
linkedList.addNodeAtLast(1);
linkedList.addNodeAtLast(2);
linkedList.addNodeAtLast(3);
linkedList.addNodeAtLast(4);
linkedList.addNodeAtLast(5);
linkedList.addNodeAtLast(6);
linkedList.addNodeAtLast(7);
linkedList.addNodeAtLast(8);
linkedList.addNodeAtLast(9);
linkedList.addNodeAtLast(10);

linkedList.head = reverseBlockOfKNodesInLinkedList(linkedList.head, 3);
linkedList.displayList();