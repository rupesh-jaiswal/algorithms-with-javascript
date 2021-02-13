/**
 * Given an array A[], find the maximum j – i such that A[j] > A[i]. For example,
Input: {34, 8, 10, 3, 2, 80, 30, 33, 1} and Output: 6 (j = 7, i = 1).

*/

function findMaxDiff(arr) {
    let leftMin = new Array(arr.length);
    let rightMax = new Array(arr.length);
    leftMin[0] = arr[0];
    for(let i=1;i<arr.length;i++) {
        leftMin[i] = Math.min(arr[i], leftMin[i-1]);
    }
    rightMax[arr.length-1] = arr[arr.length-1];
    for(let j = arr.length-2;j>=0;j--) {
        rightMax[j] = Math.max(arr[j], rightMax[j+1]);
    }
    let i = j =0;
    let maxDiff = -1;
    while(i<arr.length && j<arr.length) {
        if(leftMin[i]<rightMax[j]) {
            maxDiff = Math.max(maxDiff, j-i);
            j++;
        }else {
            i++;
        }
    }

    console.log(maxDiff);
}

const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
findMaxDiff(arr);