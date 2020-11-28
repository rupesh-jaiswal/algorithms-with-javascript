const { LinkedList, LinkedListNode }  = require('./LinkedList');

function addNumbersWrapper(list1, list2) {
    // find length of list1;

    let list1Length = list2Length = 0;
    let head = list1.head;
    while(head) {
        head = head.next;
        list1Length++;
    }
    head = list2.head;
    while(head) {
        head=head.next;
        list2Length++;
    }

    let oprand1, oprand2;
    if(list2Length>list1Length) {
        oprand1 = list2.head;
        oprand2 = list1.head;
    }else {
        oprand1 = list1.head;
        oprand2 = list2.head;
    }
    const oprand3 = oprand1;
    let diff = Math.abs(list1Length-list2Length);
    while(diff--) {
        oprand1=oprand1.next;
    }
    diff = Math.abs(list1Length-list2Length);

    const result = new LinkedList();
    const carry ={
        value: 0,
    };
    addNumbers(oprand1, oprand2, carry, result);
    addRemaining(oprand3, carry, diff, result);
    if(carry.value) {
        result.addNodeAtFirst(carry.value);
    }
    return result;
}

function addNumbers(oprand1,oprand2, carry, result) {
    if(!oprand1 && !oprand2) {
        return;
    }
    addNumbers(oprand1.next, oprand2.next, carry, result);

    const sum = oprand1.data + oprand2.data+carry.value;
    carry.value = Math.floor(sum/10);
    result.addNodeAtFirst(sum%10);
}

function addRemaining(operand, carry, diff, result) {
    if(diff===0){
        return;
    }
    addRemaining(operand.next, carry, diff-1, result);
    const sum = operand.data+carry.value;
    carry.value = Math.floor(sum/10);
    result.addNodeAtFirst(sum%10);
}
const list1 = new LinkedList();
list1.addNodeAtLast(1);
list1.addNodeAtLast(1);

const list2 = new LinkedList();
list2.addNodeAtLast(8);
list2.addNodeAtLast(9);
list2.addNodeAtLast(9);
list2.addNodeAtLast(2);

const result = addNumbersWrapper(list1, list2);

result.displayList();
console.log(result);