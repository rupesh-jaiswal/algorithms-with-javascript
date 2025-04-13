const { LinkedList, LinkedListNode } = require('../LinkedList');

const mergeList = (head1, head2) => {

    let temp = new LinkedListNode();
    let newHead = temp;
    while(head1!==null & head2!==null) {
        temp.next = head1;
        temp = temp.next;
        head1 = head1.next;
        temp.next = head2,
        head2 = head2.next;
        temp = temp.next;

    }
    if(head1!==null) {
        temp.next = head1;
    }else {
        temp.next = head2;
    }

    return newHead.next;
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

let linkedList1 = new LinkedList();
linkedList1.addNodeAtLast('a1');
linkedList1.addNodeAtLast('a2');
linkedList1.addNodeAtLast('a3');
linkedList1.addNodeAtLast('a4');
linkedList1.addNodeAtLast('a5');
// linkedList1.addNodeAtLast('a6');
// linkedList1.addNodeAtLast('a7');
// linkedList1.addNodeAtLast('a8');
// linkedList1.addNodeAtLast('a9');
// linkedList1.addNodeAtLast('a10');

linkedList.head = mergeList(linkedList.head, linkedList1.head);
linkedList.displayList();