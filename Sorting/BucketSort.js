const { insertionSort } = require('./InsertionSort');

function getHash(value) {
    return Math.floor(value/10);
}

function bucketSort(arr) {
    let buckets = [];
    for(let i=0;i<arr.length;i++) {
        const hash=getHash(arr[i]);
        if(buckets[hash]) {
            buckets[hash].push(arr[i]);
        }else {
            buckets[hash] = [arr[i]];
        }
    }
    console.log('------buckets-------', buckets);
    arr = [];
    for(let i=0;i<buckets.length;i++) {
        if(buckets[i]) {
            arr = [...arr,...insertionSort(buckets[i])];
        }
    }
    return arr;
}

let arr = [99, 10, 18,4,65,35, 2,84];


console.log(bucketSort(arr));