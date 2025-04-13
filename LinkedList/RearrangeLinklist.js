/**
 * Given a list, List1 = {A1
, A2
, . . . An–1; An
) with data, reorder it to {A1
,
An
,A2
,An–1} without using any extra space.
 */

const { LinkedList } = require('../LinkedList');


const findMiddleElement = (head) => {
    let fastPtr = head;
    let slowPtr = head;
    while(fastPtr!==null && fastPtr.next!==null&&fastPtr.next?.next!==null && slowPtr?.next !==null) {
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    };
    return slowPtr;
}

const reverseLinkedList = (head) => {
    let nextNode = null;
    let temp = null;
    while(head!==null) {
        nextNode = head.next;
        head.next = temp;
        temp = head;
        head = nextNode;
    }
    return temp;
}


const mergeList = (head1, head2) => {
    const newList = new LinkedList();
    while(head1!==null && head2!==null) {
        newList.addNodeAtLast(head1.data);
        newList.addNodeAtLast(head2.data);
        head1 = head1.next;
        head2 = head2.next;
    }

    if(head1!==null) {
        newList.addNodeAtLast(head1.data);
        head1 = head1.next;

    }

    if(head2!==null) {
        newList.addNodeAtLast(head2.data);
        head2 = head2.next;

    }

    newList.displayList();
}

const rearrange = (linklist) => {
    const middleElement = findMiddleElement(linklist.head);
    const reverseHead = reverseLinkedList(middleElement.next);
    middleElement.next = null;
    const mergedHead = mergeList(linklist.head, reverseHead);
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

rearrange(linkedList);