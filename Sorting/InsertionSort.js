function insertionSort(arr) {
    
    for(let i=1;i<=arr.length-1;i++) {
        let v= arr[i];
        let j=i;
        while(arr[j-1]>v&& j>=1) {
            arr[j]=arr[j-1];
            j--;
        }
        arr[j]=v;
    }
    return arr;
}

module.exports = {
    insertionSort,
}
// let arr= [3,1,5,7,54,2];
// insertionSort(arr);
// console.log(arr);