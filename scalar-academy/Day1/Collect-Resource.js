function collectResource(A, B) {
    const sumA = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0));
    const rows = A.length;
    const columns = A[0].length;
    const mod = 1000000007
    for(let j=0;j<A.length;j++) {
        for(let i=0;i<A[0].length;i++) {
            sumA[j][i] = j===0? A[j][i] %mod: (A[j][i]%mod + sumA[j-1][i]%mod)%mod;
        }
    }
    const sumB = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0));
    for(let i=0;i<A.length;i++) {
        for(let j=0;j<A[0].length;j++) {
            sumB[i][j] = j===0? B[i][j]%mod: (B[i][j]%mod + sumB[i][j-1]%mod)%mod;
        }
    }

    const dp = new Array(A.length+1).fill(0).map(() => new Array(A[0].length+1).fill(0));
    for(let i=1;i<=A.length;i++) {
        for(let j=1;j<=A[0].length;j++) {
            dp[i][j] = Math.max((sumA[i-1][j-1]%mod+dp[i][j-1]%mod)%mod, (sumB[i-1][j-1]%mod+dp[i-1][j]%mod)%mod);
        }
    }
 
    return dp[A.length][B[0].length];
}

function collectResource1(A, B) {
    const sumA = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0));
    const rows = A.length;
    const columns = A[0].length;
    const mod = 1000000007
    for(let j=0;j<A.length;j++) {
        for(let i=0;i<A[0].length;i++) {
            sumA[j][i] = j===0? A[j][i]: (A[j][i] + sumA[j-1][i])%mod;
        }
    }
    const sumB = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0));
    for(let i=0;i<A.length;i++) {
        for(let j=0;j<A[0].length;j++) {
            sumB[i][j] = j===0? B[i][j]: (B[i][j] + sumB[i][j-1])%mod;
        }
    }

    const dp = new Array(A.length+1).fill(0).map(() => new Array(A[0].length+1).fill(0));
    for(let i=1;i<=A.length;i++) {
        for(let j=1;j<=A[0].length;j++) {
            dp[i][j] = Math.max((sumA[i-1][j-1]+dp[i][j-1]), (sumB[i-1][j-1]+dp[i-1][j]))%mod;
        }
    }
 
    return dp[A.length][B[0].length];
}
const A =
[
  [4, 2],
  [1, 4]
];
const B= 
[
  [5, 1],
  [5, 10]
];

console.log(collectResource(A, B));