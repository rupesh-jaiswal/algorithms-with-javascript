const { LinkedList } = require('./LinkedList');

function isPalindrome(linkedList) {
    const firstHalf = [];
    const secondHalf = [];
    let slowPtr = linkedList.head;
    let fastPtr = linkedList.head;
    while(fastPtr.next!==null && fastPtr.next.next!==null) {
        fastPtr = fastPtr.next.next;
        firstHalf.push(slowPtr.data);
        slowPtr = slowPtr.next;
    }
    firstHalf.push(slowPtr.data);
    if(fastPtr.next !== null) {
        slowPtr = slowPtr.next;
    }

    while(slowPtr) {
        secondHalf.push(slowPtr.data);
        slowPtr=slowPtr.next;
    }
    if(firstHalf.join('')===secondHalf.reverse().join('')) {
        console.log('Palindrome');
    } else {
        console.log('Not Palindrome');
    }


    
}

const linkedList = new LinkedList();
linkedList.addNodeAtLast('N');
linkedList.addNodeAtLast('I');
linkedList.addNodeAtLast('T');
linkedList.addNodeAtLast('I');
linkedList.addNodeAtLast('N');

// even no of elements

// linkedList.addNodeAtLast('a');
// linkedList.addNodeAtLast('b');
// linkedList.addNodeAtLast('c');
// linkedList.addNodeAtLast('c');
// linkedList.addNodeAtLast('b');
// linkedList.addNodeAtLast('a');
isPalindrome(linkedList);