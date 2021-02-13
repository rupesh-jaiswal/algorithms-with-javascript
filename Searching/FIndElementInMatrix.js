/**
 * Give an n × n array of elements such that each row is in ascending order and
each column is in ascending order, devise an O(n) algorithm to determine if a given
element x is in the array. You may assume all elements in the n × n array are distinct.
 */

function findElement(arr, x) {
    let i=0, j=arr.length-1;
    while(j>=0 && i<arr.length) {
        if(arr[i][j]>x) {
            j--;
        }else if(arr[i][j]<x) {
            i++;
        }else {
            return true;
        }
    }
    return false;
}



 const arr = [
     [1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
     [21,22,23,24,25],
     [45, 58,62, 78, 89]
 ]

console.log(findElement(arr, 85))