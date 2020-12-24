const { getLeftChild,getRightChild, swap } = require('./Heap');

function heapify(heap, type,i) {
    while(i>0) {
        let parentIndex = Math.ceil(i/2)-1;
        if(type=='min') {
            if(heap[i].priority<heap[parentIndex].priority) {
                swap(heap, i, parentIndex);
                i=parentIndex;
            }else {
                i=parentIndex;

                //break;
            }
        }else if(heap[i].priority>heap[parentIndex].priority) {
            swap(heap, i, parentIndex);
            i=parentIndex;
        }else {
            break;
        }
    }
    return i;
}

function percolateDownMin(heap, i) {
    //let i=0;
    const minIndex = Math.floor(heap.length/2)-1;
    while(i<=heap.length) {
        const leftChild = getLeftChild(heap, i);
        const rightChild = getRightChild(heap, i);
        if(leftChild !==-1 && rightChild!==-1) {
            if(heap[i].priority>Math.min(leftChild.priority, rightChild.priority)) {
                if(leftChild.priority<rightChild.priority) {
                    swap(heap, i, 2*i+1);
                    i=2*i+1;
                }else {
                    swap(heap, i, 2*i+2);
                    i=2*i+2;
                }
            }else {
                break;
            }
        }else if(leftChild!==-1){
            if(heap[i].priority>leftChild.priority) {
                swap(heap, i, 2*i+1);
                i=2*i+1;
            }else {
                break;
            }
        }else {
            break;
        }
    }
}
class PriorityNode {
    constructor(data, priority) {
        this.data= data;
        this.priority=priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
        this.index= 0;
    }


    add(data, priority) {
        const stackNode = new PriorityNode(data, priority);
        this.heap.push(stackNode);
        heapify(this.heap, 'min', this.heap.length-1);
    }

    remove() {
        const deletedNode = this.heap.shift();

        if(this.heap.length>1) {
            this.heap.unshift(this.heap.pop());
            percolateDownMin(this.heap, 0);
        }
        return deletedNode;

    }

    update(nodeData, newPriority) {
        const index = this.heap.findIndex(({data}) => data == nodeData);
        this.heap[index].priority=newPriority;
        heapify(this.heap, 'min', index);
    }
    display() {
        this.heap.forEach(({data}) => {
            console.log(data);
        });
    }

    isEmpty() {
        return !this.heap.length;
    }
}
 module.exports = PriorityQueue;
