/**
 * Problem Statement: https://atcoder.jp/contests/dp/tasks/dp_m
 */
let count= 0;

function getWays(index, arr, k, dp) {
    count++;
    if(dp[index][k]!==-1) return dp[index][k];
    if(index==arr.length && k==0) {
        return 1;
    }
    if(k<0 || index>=arr.length) {
        return 0;
    }
    let sum=0;
    for(let i=0;i<=arr[index] && i<=k;i++) {
        sum+=getWays(index+1, arr, k-i, dp);
    }
    return dp[index][k]=sum;
}
function candies(arr, k) {
    let value = {
        count: 0,
    }
    let dp = new Array(arr.length+1).fill(-1).map(() => new Array(k+1).fill(-1));
    dp[0][0] = 1;
    const ways = getWays(0, arr, k, dp);
    console.log(dp);
    console.log("ways: ", ways);
    console.log('iterations:', count);
}
const getArrayFrfomString = (str) => {
    return str.split(' ').map(e=> parseInt(e));
}
const arr = getArrayFrfomString('1 2 3');

candies(arr, 4);
candies([9], 10);
candies([0,0], 0);