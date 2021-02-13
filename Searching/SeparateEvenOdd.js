/**
 * Separate even and odd numbers: Given an array A[], write a function that
segregates even and odd numbers. The functions should put all even numbers first, and then
odd numbers. Example: Input = {12,34,45,9,8,90,3} Output = {12,34,90,8,9,45,3}


Algorithm: The logic is similar to Quick sort.
1) Initialize two index variables left and right: left = 0, right = n – 1
2) Keep incrementing the left index until you see an odd number.
3) Keep decrementing the right index until youe see an even number.
4) If left < right then swap A[left] and A[right]
 */

 function separateEvenOdd(arr) {
     let left = 0;
     let right = arr.length-1;
     while(left<right) {
        for(;left<arr.length;left++) {
            if(arr[left]%2==1) {
                break;
            }
        }
        for(;right>=0;right--) {
            if(arr[right]%2==0) {
                break;
            }
        }

        if(left<right) {
            // swap;
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
} 

let arr = [12,34,45,9,8,90,3];
separateEvenOdd(arr);
console.log(arr);