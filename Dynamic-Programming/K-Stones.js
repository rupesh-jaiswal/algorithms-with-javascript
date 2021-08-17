/**
 * PRoblem statement: https://atcoder.jp/contests/dp/tasks/dp_k
 */


function getWinner(arr, k) {
    let dp = new Array(k+1).fill(0);
    for(let i=1;i<=k;i++) {
        for(let val of arr) {
            if(val>i) continue;
            else {
                dp[i] = dp[i-val]? 0: 1; 
            }
        }
    }
    return dp[k]? "First": "Second";
}

const arr = [2, 3]; 
const k = 5;
console.log(getWinner(arr, k));