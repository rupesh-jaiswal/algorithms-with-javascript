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
// other way 
function candiesOther(arr, k) {
    const mod = 1000000000+7;
    let dp = new Array(arr.length+1).fill(0).map(() => new Array(k+1).fill(0));
    // set i on 1 child
    for(let j=0; j<=arr[0] && j<=k;j++) {
        dp[0][j] = 1;
    }
    for(let i=1;i<arr.length;i++) {
        for(let j=0; j<=k;j++) {
            if(j==0) {
                dp[i][j] = dp[i-1][j];
            }else {
                dp[i][j] = (mod+dp[i][j-1]%mod+dp[i-1][j]%mod-((j-arr[i]-1)>=0?dp[i-1][j-arr[i]-1]%mod:0))%mod;
            }
        }
    }
    //console.log(dp);
    console.log(dp[arr.length-1][k]);

}
const getArrayFrfomString = (str) => {
    return str.split(' ').map(e=> parseInt(e));
}
const arr = getArrayFrfomString('100000 100000 100000 100000');

candiesOther(arr, 100000);
// candiesOther([9], 10);
// candiesOther([0,0], 0);