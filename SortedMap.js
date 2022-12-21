// Sorted map using linked list 
function Node (key, value) {
    this.first = key;
    this.second = value;
    this.next = null;
    this.prev = null;
    this.begin =() => {
        return this.prev ===null;
    }
    this.end = () => this.next===null;
}

const getMidNode = (head, end=null) => {
    // console.log('head', head);
    // console.log('end', end); 
    let fastptr = head;
    let slowPtr = head;

    while((fastptr.next!==null && fastptr.next.next!==null) && (fastptr.next!==end && fastptr.next.next!==end) ) {
        fastptr = fastptr.next.next;
        slowPtr = slowPtr.next;
    }
    return slowPtr;
}

function addNextTo(head, key, value) {
    const temp = head.next;
    const newNode = new Node(key, value);
    head.next = newNode;
    if(temp) {
        temp.prev = newNode;
    }
    newNode.prev = head;
    newNode.next = temp;
}
let count  = 0;
class SortedMap {
    constructor(elements, comparator) {
        this.head = null;
        this._comparator = comparator;
        elements.forEach(([first, second]) => {
            this.add(first, second)
        }); 
    }

    add = (key, value) => {
        if(this.head) {
            count = 0;
            this.addNode(this.head, key,value, null); 
            console.log('count to add '+ key+ " is "+count);
        }else {
            this.head = new Node(key, value);
        }
    }
    addFirst(key, value) {
        const newNode = new Node(key, value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head=newNode;
    }
    addNode(head, key, value, end) {
        count++;
        const midNode = getMidNode(head, end);
        if(midNode.first<=key) {
            if(midNode.next) {
                if(midNode.next.first>key) {
                    return addNextTo(midNode, key, value);
                }else {
                    return this.addNode(midNode.next, key, value, end)
                }
            }
            return addNextTo(midNode, key, value);
        }else if(midNode.prev){
            return this.addNode(head, key, value, midNode);
        }else {
            return this.addFirst(key, value);
        }
    }

    display() {
        this.displayNode(this.head);
    }
    displayNode(head) {
        if(head) {
            console.log(`${head.first} => ${head.second}`);
            this.displayNode(head.next);
        }
    }

    traverseLeftTillSame(node, key) {
        while(node.prev!==null && node.prev.first===key) {
            node=node.prev;
        }
        return node;
    }
    getLowerBound(node, key, end = null) {
        if(!node) {
            return null;
        }
        const midNode = getMidNode(node, end);
        if(midNode.first<key) {
            if(midNode.next) {
                if(midNode.next.first>=key) {
                    return midNode.next;
                }
                return this.getLowerBound(midNode.next, key, end);
            }
            return null;
        }
        if(midNode.prev===null || midNode.prev.first<key) {
            return midNode;
        }else if(midNode.prev.first===key){
            return this.traverseLeftTillSame(midNode.prev, key);
        }else{
            return this.getLowerBound(node,key, midNode);
        }
    }
    lowerbound(key) {
        return this.getLowerBound(this.head, key);
    }

}
const e = [
    [4, 9], 
[2, 11], 
[16, 4], 
[1, 99],
[3, 45],
// [12, 45],
// [5, 45],
// [3, 90],
// [9, 45],
]
const sortedMap = new SortedMap(e);
sortedMap.display();
console.log(sortedMap.lowerbound(3));
