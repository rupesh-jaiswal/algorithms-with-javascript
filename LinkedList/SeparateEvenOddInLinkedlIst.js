const { LinkedList, LinkedListNode } = require('../LinkedList');

const separateEvenOddInLinkedList = (head) => {

   let evenHead, oddHead, evenEnd, oddEnd;

   while(head!==null) {
    if(head.data%2==0) {
        if(evenHead) {
            evenEnd.next = head;
            evenEnd = head;
        } else {
            evenHead = head;
            evenEnd = head;
        }
    } else {
        if(oddHead) {
            oddEnd.next = head;
            oddEnd = head;
        } else {
            oddHead = head;
            oddEnd = head;
        }
    }
    head = head.next;
   }

   evenEnd.next = oddHead;
   oddEnd.next = null;
   return evenHead;
};
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



linkedList.head = separateEvenOddInLinkedList(linkedList.head);
linkedList.displayList();