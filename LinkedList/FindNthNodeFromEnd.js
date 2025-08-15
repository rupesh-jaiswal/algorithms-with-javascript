/**
 * Problem: Find nth node from the end of a Linked List.

 */

const { LinkedList }  = require('../LinkedList');

const linkedList = new LinkedList();
linkedList.addNodeAtLast(1);
linkedList.addNodeAtLast(2);
linkedList.addNodeAtLast(3);
linkedList.addNodeAtLast(4);
linkedList.addNodeAtLast(5);
linkedList.addNodeAtLast(6);
linkedList.addNodeAtLast(7);

function findNthNodeFromEnd(linkedList, n) {
    let head  =linkedList.head;
    let pthNode = head;

    for(let i=0;i<n;i++) {
        if(head) {
            head = head.next;
        }
    }

    while(head!==null) {
        head=head.next;
        pthNode = pthNode.next;
    }

    return pthNode.data;
}


console.log(findNthNodeFromEnd(linkedList, 6));

