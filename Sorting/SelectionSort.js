function selectionSort(array) {
    let min;
    for(let i=0;i<array.length-1;i++) {
        min=i;
        for(let j=i+1;j<array.length;j++) {
            if(array[min]>array[j]) {
                min=j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
}
let arr= [3,1,5,7,54,2];
selectionSort(arr);
console.log(arr);