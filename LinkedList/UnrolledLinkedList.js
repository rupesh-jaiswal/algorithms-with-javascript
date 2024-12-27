class LinkedNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedBlock {
    constructor() {
        this.next = null;
        this.head=null;
        this.nodeCount = 0
    }

    display() {
        let current = this.head;
        let str = ''
        do{
            str+= ' '+ current.data;
            current = current.next;
        }while(current!==this.head)
        
        console.log(str);
        
    }
}

class UnRolledLnkedList{
    constructor(maxBlocksInNode) {
        this.maxBlocksInNode = maxBlocksInNode
        this.size=0;
        this.linkedBlockHead = null
    }

    addElements(data) {
        const newNode = new LinkedNode(data);
        if(this.linkedBlockHead!==null) {
            let currentBlock = this.linkedBlockHead;
            const blockNumberToBeAddedTo = Math.floor(this.size/this.maxBlocksInNode);
            let k=0;
            while(currentBlock.next !==null && k<blockNumberToBeAddedTo) {
                currentBlock = currentBlock.next;
                k++;
            }
            if(currentBlock.nodeCount >=this.maxBlocksInNode) {
                if(currentBlock.next) {
                    currentBlock = currentBlock.next;
                } else {
                    const newLinkedBlock = new LinkedBlock();
                    currentBlock.next = newLinkedBlock;
                    currentBlock = newLinkedBlock;
                }
            }
            this.addInLinkedBlock(currentBlock, newNode);
            this.size++;
        } else {
            this.linkedBlockHead = new LinkedBlock()
            this.size++;
            this.linkedBlockHead.head = newNode;
            this.linkedBlockHead.nodeCount++;
            newNode.next = this.linkedBlockHead.head;
            // console.log(this.linkedBlockHead);

            // console.log(this.linkedBlockHead.display());
        }
    }
    addInLinkedBlock(linkedBlock, newNode) {
        let current = linkedBlock.head;
        if(current ===null) {
            linkedBlock.head = newNode;
            newNode.next = linkedBlock.head;
        } else {
            while(current.next!=linkedBlock.head) {
                current=current.next
            }
            current.next = newNode;
            newNode.next = linkedBlock.head
        }
        linkedBlock.nodeCount++;
    }

    display() {
        let head = this.linkedBlockHead;
        console.log(head);
        while(head!==null) {
            head.display();
            head = head.next;
        }
    }

    
}

const unrolledList = new UnRolledLnkedList(4);

unrolledList.addElements(1)
unrolledList.addElements(2)
unrolledList.addElements(3)
unrolledList.addElements(4)
unrolledList.addElements(5)
unrolledList.addElements(6)
unrolledList.addElements(7)
unrolledList.addElements(8)
unrolledList.addElements(9)
unrolledList.addElements(10)
unrolledList.addElements(11)
unrolledList.display()

