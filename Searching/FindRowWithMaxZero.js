/**
Given n × n matrix, and in each row all 1’s are followed by 0’s. Find the row
with the maximum number of 0’s.


Solution: Start with first row, last column. If the element is 0 then move to the previous column in
the same row and at the same time increase the counter to indicate the maximum number of 0’s. If
the element is 1 then move to the next row in the the same column. Repeat this process until your
reach last row, first column.
 */
function findRowWithMaxZero(arr) {
    let maxCount = 0;
    let maxRow = -1;
    let i=0;
    let j=arr.length-1;
    let count = 0;
    while(i>=0 && j>=0 && i<arr.length) {
        if(arr[i][j]===0) {
            count++;
            j--;
        }else if(arr[i][j]===1) {
            i++;
        }
        if(count>maxCount) {
            maxRow = i;
            maxCount = count;
        }
    }
    return maxRow;
}

const arr= [
    [1,1,1,0,0],
    [1,1,1,1,0],
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0]
];

console.log(findRowWithMaxZero(arr));