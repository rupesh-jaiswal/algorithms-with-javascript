const { Heap, getLeftChild,getRightChild } = require('./Heap');

function heapify(heap, type) {
    let i = heap.length-1;
    while(i>0) {
        let parentIndex = Math.ceil(i/2)-1;
        if(type=='min') {
            if(heap[i].data<heap[parentIndex].data) {
                swap(heap, i, parentIndex);
                i=parentIndex;
            }else {
                i=parentIndex;

                //break;
            }
        }else if(heap[i].data>heap[parentIndex].data) {
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
            if(heap[i].data>Math.min(leftChild.data, rightChild.data)) {
                if(leftChild.data<rightChild.data) {
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
            if(heap[i].data>leftChild.data) {
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

function percolateDownMax(heap, i) {
    //let i=0;
    const minIndex = Math.floor(heap.length/2)-1;
    while(i<=heap.length) {
        const leftChild = getLeftChild(heap, i);
        const rightChild = getRightChild(heap, i);
        if(leftChild !==-1 && rightChild!==-1) {
            if(heap[i].data<Math.max(leftChild.data, rightChild.data)) {
                if(leftChild.data>rightChild.data) {
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
            if(heap[i].data<leftChild.data) {
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
function swap(heap, i, j) {

    heap[i].ptr.otherIndex = j
    heap[j].ptr.otherIndex = i;
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
class MinMaxHeapNode {
    constructor(data, ptr=null) {
        this.data= data;
        this.ptr=ptr;
        this.otherIndex = 0;
    }
}
class MinMaxHeap {
    constructor() {
        this.minHeap = []
        this.maxHeap = [];
    }

    add(data) {
        if(Array.isArray(data)) {
            for(let i=0;i<data.length;i++) {
                this.addData(data[i]);
            }
        }else {
            this.addData(data);
        }
        
    }

    addData(data) {
        const minData = new MinMaxHeapNode(data, null, this.minHeap.length);
        const maxData = new MinMaxHeapNode(data, minData, this.maxHeap.length);
        minData.ptr = maxData;
        minData.ptr.otherIndex = this.maxHeap.length;
        maxData.ptr.otherIndex = this.minHeap.length;
        this.minHeap.push(minData);
        heapify(this.minHeap, 'min');
        this.maxHeap.push(maxData);
        heapify(this.maxHeap);
    }

    deleteMin() {
        const deletedElement = this.minHeap.shift();
        this.minHeap.unshift(this.minHeap.pop());
        this.minHeap.forEach((data, index) => {
            data.ptr.otherIndex = index;
        });
        percolateDownMin(this.minHeap, 0);

        this.maxHeap.splice(deletedElement.otherIndex, 1, this.maxHeap.pop());
        this.maxHeap.forEach((data, index) => {
            data.ptr.otherIndex = index;
        });
        percolateDownMax(this.maxHeap,deletedElement.otherIndex)
        return deletedElement;  
    }

    deleteMax() {
        const deletedElement = this.maxHeap.shift();
        this.maxHeap.unshift(this.maxHeap.pop());
        this.maxHeap.forEach((data, index) => {
            data.ptr.otherIndex = index;
        });
        percolateDownMax(this.maxHeap, 0);

        this.minHeap.splice(deletedElement.otherIndex, 1, this.minHeap.pop());
        this.minHeap.forEach((data, index) => {
            data.ptr.otherIndex = index;
        });
        percolateDownMin(this.minHeap,deletedElement.otherIndex)
        return deletedElement;  
    }
    display() {
        this.minHeap.forEach((data) => console.log(data));

        console.log('...........max heap...............');

        this.maxHeap.forEach((data) => console.log(data));

    }
}


const arr = [10, 5, 11, 56, 3, 18, 2, 19];
const minMaxHeap = new MinMaxHeap();
minMaxHeap.add(arr);
minMaxHeap.display();
console.log('----------deleted min---------' ,minMaxHeap.deleteMin());
console.log('----------deleted min---------' ,minMaxHeap.deleteMin());
console.log('----------deleted max---------' ,minMaxHeap.deleteMax());
console.log('----------deleted max---------' ,minMaxHeap.deleteMax());

minMaxHeap.display();
// console.log(minHeap.delete());
// console.log('ater delete');
// minHeap.display();
// const maxHeap = new Heap(Heap.TYPE.MAX);
// maxHeap.add(arr);
// maxHeap.display();