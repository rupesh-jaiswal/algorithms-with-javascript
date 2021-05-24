// https://atcoder.jp/contests/dp/tasks/dp_a

function minCost(n, a) {
  let dp=new Array(n);
  dp[0] = 0;
  dp[1] = Math.abs(a[0]-a[1]);
  for(let i=2;i<n;i++) {
    dp[i] = Math.min(dp[i-1]+ Math.abs(a[i-1]-a[i]), dp[i-2]+Math.abs(a[i]-a[i-2]));
  }
  console.log(dp[n-1]);
}
  
const arr = [30,10,60,10,60,50];
minCost(6, arr);
