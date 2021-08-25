/**
 * Problem statement: https://atcoder.jp/contests/dp/tasks/dp_n
 */
/**
 * 
 * @param {*} arr 
 */
function slimes(arr) {
    let adjSum = [];
    // frist I found out adjacent sum
    for(let i=0;i<arr.length-1;i++) {
        adjSum.push(arr[i]+arr[i+1]);
    }
    let cost = 0;
    let itr = 0;
    let minIndex = 0;
    while(itr <adjSum.length-1) {
        // take minimum
        let min = Math.min(...adjSum);
        // find index of minimum
        minIndex=adjSum.indexOf(min);
        // add cost 
        cost+=min;
        // minindex is processed hence infinity
        adjSum[minIndex] = Infinity;
        itr++;
        // adj next sum value

        while(minIndex+1==Infinity) {
            if(minIndex ==adjSum.length-1) {
                minIndex=0;
            }else {
                minIndex++;
            }
        }
        adjSum[minIndex+1] = min+adjSum[minIndex+1] - arr[minIndex+1];
        console.log(adjSum);
    }
    console.log(cost);
}

//other way
function slimesOther(i, j, arr, dp, sum) {
    if(i==j) return 0;
    if(dp[i][j]!==-1) return dp[i][j]
    let minCost = Infinity;
    for(let k=i;k<j;k++) {
        minCost = Math.min(minCost, slimesOther(i, k, arr, dp, sum)+ slimesOther(k+1, j, arr, dp, sum)+ sum[i][j]);
    }
    return dp[i][j] = minCost;
}
function getMinCost(arr) {
    let dp=new Array(arr.length).fill(-1).map(() => new Array(arr.length).fill(-1));
    let sum = new Array(arr.length).fill(0).map(() => new Array(arr.length).fill(0));
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr.length;j++) {
            sum[i][j] = arr[j]+ ((i==j)? 0: sum[i][j-1]);
        }
    }
    console.log(slimesOther(0, arr.length-1, arr, dp, sum));
    console.log(sum);
}
getMinCost([10,20,30,40]);
// slimes('10 10 10 10 10'.split(' ').map(e => parseInt(e)));