/**
 * 
Given an array of 2n integers in the following format a1 a2 a3 ...an b1 b2 b3
...bn. Shuffle the array to a1 b1 a2 b2 a3 b3 ... an bn without any extra memory.
 */


function swap(heap, i, j) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

function shuffleArray(arr) {
    let n=4;
    for(let i=0,q=1,k=n;i<n;i++,k++,q++) {
        for(let j=k;j>i+q;j--) {
            swap(arr, j-1,j);
            console.log(`i = ${i} ,q = ${q} , k = ${k}, j = ${j}`);
            console.log(arr);
        }
    }
}

arr = [1,2,3,4,5,6,7,8];
shuffleArray(arr);
console.log(arr);