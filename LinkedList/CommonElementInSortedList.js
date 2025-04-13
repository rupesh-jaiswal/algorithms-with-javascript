/**
 * Given two sorted linked lists, given an algorithm for the printing common
elements of them.

 */
const { LinkedList } = require('../LinkedList');

const getCommonElements = (head1, head2) => {

    const common = [];
    while(head1!==null && head2!==null) {
        if(head1.data === head2.data) {
            common.push(head1.data);
            head1 = head1.next;
            head2 = head2.next;
        }else if(head1.data>head2.data) {
            head2 = head2.next;
        }else {
            head1 = head1.next;
        }
    }
    return common;
}

let linkedList = new LinkedList();
let linkedList2 = new LinkedList();

let linkedList1 = new LinkedList();

linkedList.addNodeAtLast(1);
linkedList.addNodeAtLast(2);
linkedList.addNodeAtLast(3);
linkedList.addNodeAtLast(4);
linkedList.addNodeAtLast(5);
linkedList.addNodeAtLast(6);
linkedList1.addNodeAtLast(7);
linkedList1.addNodeAtLast(8);
linkedList1.addNodeAtLast(9);

linkedList2.addNodeAtLast(9);
linkedList2.addNodeAtLast(9);
linkedList2.addNodeAtLast(9);
linkedList2.addNodeAtLast(9);
linkedList2.addNodeAtLast(9);
const commonElements = getCommonElements(linkedList2.head, linkedList1.head);
console.log(commonElements);