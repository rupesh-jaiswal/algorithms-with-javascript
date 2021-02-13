const { LinkedListNode, LinkedList } = require('../LinkedList');

function getMidNode(head) {
    let fastptr = slowptr = head;
    while(fastptr.next!=null && fastptr.next.next!==null) {
        fastptr = fastptr.next.next;
        slowptr = slowptr.next;
    };
    return slowptr;
}

function merge(list1Head, list2Head) {
    let sortedListHead = new LinkedListNode();
    let sortedHead = sortedListHead;
    while(list1Head && list2Head) {
        if(list1Head.data>list2Head.data) {
            sortedListHead.next = list2Head;
            list2Head = list2Head.next;
            
        }else {
            sortedListHead.next = list1Head;
            list1Head = list1Head.next;
        }
        sortedListHead = sortedListHead.next;
    }
    if(list1Head) {
        sortedListHead.next=list1Head;
    }
    if(list2Head) {
        sortedListHead.next=list2Head;
    }

    return sortedHead.next;
}
function mergeSort(head) {
    if(head==null || head.next==null) {
        return head;
    }
    let list1Head = head;
    let midNode = getMidNode(head);
    let list2Head = midNode.next;
    midNode.next = null;
    let sortedList1Head = mergeSort(list1Head);
    let sortedList2Head = mergeSort(list2Head);
    return merge(sortedList1Head, sortedList2Head);
}

const linkedList = new LinkedList();
linkedList.addNodeAtLast(10);
linkedList.addNodeAtLast(2);
linkedList.addNodeAtLast(9);
linkedList.addNodeAtLast(1);
linkedList.addNodeAtLast(3);
linkedList.addNodeAtLast(6);
linkedList.addNodeAtLast(4);
linkedList.addNodeAtLast(8);
linkedList.head = mergeSort(linkedList.head);
linkedList.displayList();