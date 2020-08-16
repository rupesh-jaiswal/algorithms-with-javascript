function createMinHeap(arr) {
    const heap = [];

    arr.forEach((element, index) => {
        heap.push(element);
        let i = heap.length-1;
        while(i>0) {
            const parentIndex = Math.ceil(i/2)-1;
            if(heap[i]<heap[parentIndex]){
               swap(heap, i, parentIndex);
              i=parentIndex;
            }
            
        }
    });
    return heap;
}

function swap(a, i,j) {
    let temp = a[i];
    a[i]=a[j];
    a[j]=temp;
}


function heapSort(arr, sortType='ASC') {
    // create a heap
    let minHeap  = createMinHeap(arr);
    console.log('min-heap', minHeap);
    // delete elements from heap
  const sortedList= [];
    while(minHeap.length>0) {
      sortedList.push(minHeap.shift());
      minHeap.unshift(minHeap[minHeap.length-1]);
      minHeap.length--;

      // main minHeap
      let i= 0;
      const minIndex = Math.floor(minHeap.length/2)-1;
      while(i<=minIndex) {
        const leftChild = minHeap[2*i+1];
        const rightChild = minHeap[2*i+2];
        if(minHeap[i]> Math.max(leftChild, rightChild)) {
            if(leftChild<=rightChild) {
                swap(minHeap, i, 2*i+1);
                i=2*i+1;
            }else {
                swap(minHeap, i, 2*i+2);
                i=2*i+2;
            }
            console.log(i);
        }
      }
        
    }
  return sortedList;
  
}
const array = [10,4,6,9,2,6,8];
console.log(heapSort(array))