const { LinkedList, LinkedListNode } = require('../LinkedList');

const findLength = (head) => {
    let length = 0;
    while(head!==null) {
        length++;
        head=head.next;
    }
    return length;
}

const traverseListByOffset = (head, offset) => {
    while(offset>0) {
        head = head.next;
        offset--;
    }
    return head;
};

const addList = (head1, head2) => {
    let firstListlength = findLength(head1);
    let secondListlength = findLength(head2);
    let biggerNumberHead, smallerNumberHead, partialBigHead;
    diff = Math.abs(firstListlength-secondListlength);
    if(firstListlength<secondListlength) {
        biggerNumberHead = head2;
        smallerNumberHead = head1;
    }else {
        biggerNumberHead = head1;
        smallerNumberHead = head2;
    }
    partialBigHead = traverseListByOffset(biggerNumberHead, diff-1);
    
    const newList = new LinkedList();
    const obj = { carry: 0, newList}

    const partialSum = addLnkedList(partialBigHead.next, smallerNumberHead, obj);

    const finalCarry = addNumberInLinklist(biggerNumberHead, partialSum.carry, diff);
    if(finalCarry>0) {
        const newNode = new LinkedListNode(finalCarry);
        newNode.next = biggerNumberHead;
        biggerNumberHead = newNode;
    }
    partialBigHead.next = newList.head;


    const finalList  = new LinkedList();
    finalList.head = biggerNumberHead;
    finalList.displayList();


};

const addNumberInLinklist = (node, preCarry, count) => {
    if(count==0) {
        return preCarry;
    }
    const carry = addNumberInLinklist(node.next, preCarry, --count);
    let {sum, carry: newCarry } = addNumbers(node.data, carry, 0);
    node.data = sum;
    return newCarry;
}

const addNumbers = (num1, num2, preCarry) => {
    let sum =num1+num2+preCarry;
        let carry = Math.floor(sum/10);
        sum=sum%10;
        return ({ carry, sum })
}
function addLnkedList(node1, node2, obj) {

    if(node1 ===null) {
        return obj
    }

    let newObj = addLnkedList(node1.next, node2.next, obj);

        const { sum, carry} = addNumbers(node1.data, node2.data, newObj.carry)

        const newNode = new LinkedListNode(sum)
        newNode.next = newObj.newList.head;
        newObj.carry = carry;
        newObj.newList.head = newNode;
        return newObj
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


addList(linkedList2.head, linkedList1.head)
// linkedList.head = addLnkedList(linkedList.head);
// linkedList.displayList();