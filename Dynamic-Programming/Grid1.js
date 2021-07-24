/**
 * problem statement: https://atcoder.jp/contests/dp/tasks/dp_h
 * 
 */
function findTotalPaths(grid, m, n) {
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    dp[m-1][n-1] = 1;
    for(let i=m-1; i>0;i--) {
        for(let j=n-1;j>0;j--) {
            if(grid[i-1][j]!=='#') {
                dp[i-1][j] = dp[i][j] + dp[i-1][j+1];
            }
            if(grid[i][j-1] !== '#') {
                dp[i][j-1] = dp[i][j] + dp[i+1][j-1];
            }
        }
    }
    dp[0][0] = dp[0][1] + dp[1][0]; 
    console.log(dp[0][0]);
}
const grid1 = `..#..
.....
#...#
.....
..#..`.split('\n').map((a) => a.split(''));
const grid = [
    '...#'.split(''),
    '.#..'.split(''),
    '....'.split(''),
];
console.log(grid1);
findTotalPaths(grid1, grid1.length, grid1[0].length);