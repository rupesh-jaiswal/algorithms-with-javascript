//  https://www.scaler.com/academy/mentee-dashboard/classroom/faang-e2ea7de3-7ced-45ca-92db-3e37a989c8a0/#assignment

const  A = [
    [468, 0],
    [335, 501],
  ]

function solve(A) {

    const getMax = (i, j, dp, A) => {
        if(i==A.length) {
            return 0;
        }
        if(dp[i][j]!==-1) return dp[i][j];
        
        return (dp[i][j] = Math.max(A[i][j]+getMax(i+1, j, dp, A), A[i][j]+getMax(i+1, j+1, dp, A)));
    }
    let dp = new Array(A.length)
        .fill(-1)
        .map(
            () => new Array(A[0].length)
            .fill(-1)
        );
    const max = getMax(0, 0, dp, A);
    console.log(dp);
    return dp[0][0];
}
solve(A);


