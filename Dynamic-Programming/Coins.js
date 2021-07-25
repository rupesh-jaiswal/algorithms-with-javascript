/**
 * problem statement: https://atcoder.jp/contests/dp/tasks/dp_i
 */
let count = 0
function findProbability(index, p, tailCount, dp) {
    count++;
    if(tailCount>p.length/2) return 0;
    if(index >= p.length) return 1;
    if(dp[index][tailCount]!==-1) return dp[index][tailCount];
    return (dp[index][tailCount] = p[index]*findProbability(index+1, p, tailCount, dp) + (1-p[index])*findProbability(index+1, p, tailCount+1, dp));
}

function findHeadProbability(p) {
    let dp = new Array(p.length).fill(0).map(() => new Array(p.length).fill(-1));
    return findProbability(0, p, 0, dp)
}
const p = [0.3, 0.6,0.8];
const p1 = [0.42, 0.01, 0.42, 0.99, 0.42]
const p3 = [0.5];
console.log(findHeadProbability(p1));
console.log('interation', count);