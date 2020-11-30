const { Heap } = require('./Heap');
function findLessThanK(heap, i, k) {
    if(i>=heap.length) {
        return;
    }
    if(heap[i]<=k) {
        console.log(heap[i]);
        findLessThanK(heap, 2*i+1, k);
        findLessThanK(heap, 2*i+2, k);
    }
}

const arr = [10, 5, 11, 56, 3, 18, 2, 19];
const minHeap = new Heap(Heap.TYPE.MIN);
minHeap.add(arr);   
findLessThanK(minHeap.heap, 0, 17);