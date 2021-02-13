/**
 * Given an array A[]
consisting of 0’s, 1’s and 2’s, give an algorithm for sorting A[].The algorithm should put all
0’s first, then all 1’s and finally all 2’s at the end. Example Input =
{0,1,1,0,1,2,1,2,0,0,0,1}, Output = {0,0,0,0,0,1,1,1,1,1,2,2}
 */

function swap(heap, i, j) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}

 function separateZeroOneTwo(arr) {
     let low = mid=0;
     let high = arr.length-1;
     while(mid<=high) {
        switch(arr[mid]) {
            case 0: swap(arr,low,mid);
                low++;
                mid++;
                break;
            case 1: 
                mid++;
                break;
            case 2: swap(arr,mid,high);
                high--;
                break;
        }
     }
 }

 let arr = [0,1,1,0,1,2,1,2,0,0,0,1];
 separateZeroOneTwo(arr);
 console.log(arr);