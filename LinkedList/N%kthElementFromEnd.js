const { LinkedList } = require('../LinkedList');

const  findNModuloKthElementFromEnd = (head, k) => {
    if(k<=0) return null
    let modularNode = head;
    let i=0;
    for( i=1;i<=k;i++) {
        if(head) {
            head=head.next
        } else {
            return null
        }
    }

    while(head!=null) {
        head=head.next;
        modularNode = modularNode.next;
        i++;
    }
    let temp;
    i--;
    const n=i;
    console.log('length---', n);
    if(i%k ===0) {
        while(modularNode!==null){
            temp = modularNode;
            modularNode = modularNode.next;
        }
        return temp;
    }else {
        for(let j=0;j<n%k && modularNode;j++) {
            temp = modularNode;
            modularNode = modularNode.next;
        }
        return temp;
    }
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

const result  =findNModuloKthElementFromEnd(linkedList.head, 4);

console.log(result);