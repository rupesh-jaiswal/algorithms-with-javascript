const { getLeftChild,getRightChild, swap } = require('./Heap');

function heapify(heap, type) {
    let i = heap.length-1;
    while(i>0) {
        let parentIndex = Math.ceil(i/2)-1;
        if(type=='min') {
            if(heap[i].dataIndex<heap[parentIndex].dataIndex) {
                swap(heap, i, parentIndex);
                i=parentIndex;
            }else {
                i=parentIndex;

                //break;
            }
        }else if(heap[i].dataIndex>heap[parentIndex].dataIndex) {
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
            if(heap[i].dataIndex>Math.min(leftChild.dataIndex, rightChild.dataIndex)) {
                if(leftChild.dataIndex<rightChild.dataIndex) {
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
            if(heap[i].dataIndex>leftChild.dataIndex) {
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
class StackNode {
    constructor(data, dataIndex) {
        this.data= data;
        this.dataIndex=dataIndex;
    }
}

class Stack {
    constructor() {
        this.heap = [];
        this.index= 0;
    }


    push(data) {
        const stackNode = new StackNode(data, this.index);
        this.index -=1;
        this.heap.push(stackNode);
        heapify(this.heap, 'min');
    }

    pop() {
        const deletedNode = this.heap.shift();
        this.count+=1;
        this.heap.unshift(this.heap.pop());
        percolateDownMin(this.heap, 0);
        return deletedNode.data;
    }

    display() {
        this.heap.forEach(({data}) => {
            console.log(data);
        });
    }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(6);
stack.push(1);
stack.push(11);

console.log('deleted element', stack.pop());
console.log('deleted element', stack.pop());

stack.push(14);
stack.push(19);

console.log('deleted element', stack.pop());
