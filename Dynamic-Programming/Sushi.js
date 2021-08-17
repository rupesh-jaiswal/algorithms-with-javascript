/**
 * Problem Statemnt: https://atcoder.jp/contests/dp/tasks/dp_j
 */
const size = 302
let dp = new Array(size).fill(-1).map(() => new Array(size).fill(-1).map(() => new Array(size).fill(-1)));
//console.log(dp);
function sushi(x, y, z, n) {
    if(x<0 || y< 0 || z<0) {
        return 0;
    }
    if(x==0 && y===0 && z===0) {
        return 0;
    }
    if(dp[x][y][z] >-0.9) {
        return dp[x][y][z];
    }
    const exp = n+x*sushi(x-1, y, z, n)+y*sushi(x+1, y-1, z, n)+z*sushi(x, y+1, z-1, n);
    return dp[x][y][z] = exp/(x+y+z);
}

function getExpectation(arr) {
    const frequecnies = arr.reduce((acc, num) => {
        if(num===1) {
            acc.one++;
        }else if(num===2) {
            acc.two++;
        }else {
            acc.three++;
        }
        return acc;
    }, { one: 0, two: 0, three: 0});
    console.log(frequecnies);
    return sushi(frequecnies.one, frequecnies.two, frequecnies.three, arr.length);
}

const arr = [1,1,1];
console.log(getExpectation(arr));