/**
 * https://atcoder.jp/contests/dp/tasks/dp_o
 */
const mod= Math.pow(10, 9)+7;
function matching(comp, i, mask, dp) {
    if(i>=comp.length) {
        if(mask==0) {
            return 1;
        }
        return 0;
    }
    if(dp[i][mask]!==-1) return dp[i][mask];

    let ans = 0;
    for(let w = 0;w<comp.length;w++) {
        const available = ((1<<w) & (mask))? 1: 0;
        if(available && comp[i][w]) {
            ans = (ans%mod + matching(comp, i+1, mask^1<<w, dp)%mod)%mod;
        }
    }
    return dp[i][mask] = ans;
}

function getMatching(comp) {
    const w = comp.length;
    let dp = new Array(comp.length+1).fill(-1).map(() => new Array((1<<w)).fill(-1));
    console.log(matching(comp, 0, (1<<w)-1, dp));
    console.log(dp);
}



const comp = [[0, 1, 1],
    [1, 0, 1],
    [1, 1, 1]];

    const comp1 = [[0,1],[1, 0]];

getMatching(comp1);
//console.log(ways);