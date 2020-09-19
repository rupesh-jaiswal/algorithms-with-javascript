/*
Given a list, List1 = {A1, A2, . . . An–1; An) with data, reorder it to {A1,
An,A2,An–1} without using any extra space.


Solution: Find the middle of the linked list. We can do it by slow and fast pointer approach. After
finding the middle node, we reverse the right halfl then we do a in place merge of the two halves
of the linked list.

*/
const { LinkedList } = require('./LinkedList');

function reverseLinkedList(head) {
    
    let temp, next;
    while(head) {
        next = head.next;
        head.next = temp;
        temp=head;
        head = next;
    }
    return temp;
}
function alternateReverse(head) {
    let slowPtr=head, fastPtr = head;
    while(fastPtr.next!==null && fastPtr.next.next!==null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }

    if(fastPtr.next!==null) {
        fastPtr = fastPtr.next;
    }

    let head1 = reverseLinkedList(slowPtr.next);
    slowPtr.next = null;

    let temp1, temp2;
    const newHead = head;
    while(head && head1) {
        temp1 = head.next;
        head.next = head1;
        temp2 = head1.next;
        head1.next = temp1;
        head = temp1;
        head1 = temp2;
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
linkedList.head = alternateReverse(linkedList.head);
linkedList.displayList();