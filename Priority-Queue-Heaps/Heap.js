function heapify(heap, type) {
    let i = heap.length-1;
    while(i>0) {
        let parentIndex = Math.ceil(i/2)-1;
        if(type=='min') {
            if(heap[i]<heap[parentIndex]) {
                swap(heap, i, parentIndex);
                i=parentIndex;
            }else {
                i=parentIndex;

                //break;
            }
        }else if(heap[i]>heap[parentIndex]) {
            swap(heap, i, parentIndex);
            i=parentIndex;
        }else {
            break;
        }
    }
}

function getLeftChild(heap, i) {
    const leftIndex = 2*i+1;
    if(leftIndex>=heap.length) {
        return -1;
    }
    return heap[leftIndex];
}

function getRightChild(heap, i) {
    const rightIndex = 2*i+2;
    if(rightIndex>=heap.length) {
        return -1;
    }
    return heap[rightIndex];
}
function swap(heap, i, j) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

class Heap {
    static TYPE = {
        MAX: 'max',
        MIN: 'min',
    };
    constructor(type) {
        this.type = type;
        this.count = 0;
        this.heap = [];
    }


    add(data) {
        if(Array.isArray(data)) {
            for(let i=0; i<data.length;i++) {
                this.heap.push(data[i]);
                heapify(this.heap, this.type);
            }
        }else {
            this.heap.push(data);
            heapify(this.heap, this.type);
        }
        
    }

    delete() {
        const leftChild = getLeftChild(this.heap, 0);
        const rightChild = getRightChild(this.heap, 0);
        const deletedElement = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        // if(leftChild !==-1 && rightChild!==-1) {
        //     if(leftChild>rightChild) {
        //         this.heap.splice(1, 1);
        //         this.heap.push(leftChild);
        //     }else {
        //         this.heap.splice(2,1);
        //         this.heap.push(rightChild);
        //     }
        // }
        heapify(this.heap, this.type);
        return deletedElement;    
    }
    display() {
        console.log(this.heap.join(', '));
    }
}

exports = {
    Heap,
    heapify,
}

const arr = [10, 5, 11, 56, 3, 18, 2, 19];
const minHeap = new Heap(Heap.TYPE.MIN);
minHeap.add(arr);
minHeap.display();
console.log(minHeap.delete());
console.log('ater delete');
minHeap.display();
const maxHeap = new Heap(Heap.TYPE.MAX);
maxHeap.add(arr);
maxHeap.display();
