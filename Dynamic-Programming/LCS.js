/**
 * problem statement: https://atcoder.jp/contests/dp/tasks/dp_f
 * Notes link
 */

function getLCS (s1, s2) {
    const n= s1.length;
    const m=s2.length;
    let dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0));
    for(let i = 1;i<=n;i++) {
        for (let j=1;j<=m;j++) {
            if(s1[i-1]===s2[j-1]) {
                dp[i][j] = 1+dp[i-1][j-1];
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    } 
    let str="";
    let i=n, j=m;
    while(i>0 && j>0) {
        if(s1[i-1]===s2[j-1]) {
            str+=s1[i-1];
            i--;
            j--;
            // ans--;
        }else if(dp[i-1][j]>dp[i][j-1]) {
            // go up
            i--;
        }else {
            // go left
            j--;
        }
    }
    return str.split('').reverse().join('');
}

const s1 = "axyb";
const s2 = "abyxb";
console.log(getLCS(s1, s2));
