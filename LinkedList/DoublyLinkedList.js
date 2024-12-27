class DoublyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next=null;
        this.prev=null;
    }
}

class DoubluLinkedList {
    constructor() {
        this.head=null;
    }

    addNodeAtFirst(data) {
        const newNode = new DoublyLinkedListNode(data);
        if(this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        } else {
            this.head = newNode;
        }
    }

    addNodeAtLast(data) {
        const newNode = new DoublyLinkedListNode(data);
        if(this.head) {
            let current = this.head;
            while(current.next!=null) {
                current=current.next;
            }
            current.next = newNode;
            newNode.prev= current;
        } else {
            this.head = newNode;
        }
    }

    display() {
        let current = this.head;
        while(current!==null) {
            console.log(current.data);
            current = current.next;
        }
    }

    addNodeAtIndex(data, index) {
        const newNode = new DoublyLinkedListNode(data);

        let current = this.head;
        let k=0;
        while(current!==null && k<index-1) {
            current=current.next;
            k++;
        }
        newNode.prev = current;
        newNode.next = current.next;
        current.next.prev = newNode;
        current.next = newNode;
    }

    reverse() {
        let current = this.head;

        //to track last element
        let lastElement = null;
        while(current !==null) {
            // assign current to last element
            lastElement = current;
            // store prev pointer of current node in temp variable
            const temp = current.prev;
            // swap prev and next pointers
            current.prev = current.next;
            current.next = temp;
            // move current to the next element which is store in prev pointer
            current=current.prev
        }
        this.head = lastElement;
    }

    deleteAtIndex(index) {
        let k=0;
        let current = this.head;
        while(current.next!==null && k<index) {
            current=current.next;
            k++
        }
        if(current.next!==null) {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
    }
}

const ddl = new DoubluLinkedList();
ddl.addNodeAtLast(0)
ddl.addNodeAtFirst(5)
ddl.addNodeAtFirst(4)
ddl.addNodeAtFirst(3)
ddl.addNodeAtFirst(2)
ddl.addNodeAtFirst(1)
ddl.addNodeAtLast(6)

ddl.addNodeAtIndex(67, 4);
ddl.display()
// console.log('----reverse---------')
// ddl.reverse()
console.log('----after delete---------')

ddl.deleteAtIndex(4);
console.log('----reverse---------')
ddl.reverse()
ddl.display()
