// https://atcoder.jp/contests/dp/tasks/dp_b

function minCost(arr, k) {
  let dp = new Array(arr.length).fill(Infinity);
  dp[0] = 0;
  for(let i=1;i<arr.length;i++) {
    for(let j=1;j<=k;j++) {
      if(i-j<0) break;
      dp[i] = Math.min(dp[i], dp[i-j]+Math.abs(arr[i]-arr[i-j]));
    }
  }
  return dp[arr.length-1];
}

const arr = [40, 10, 20, 70, 80, 10, 20, 70, 80, 60];

console.log(minCost(arr, 4));
