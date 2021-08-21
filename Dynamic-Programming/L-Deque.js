/**
 * Problem Statement: https://atcoder.jp/contests/dp/tasks/dp_l
 */
function getFinalXMinusY(arr, index, X, Y, turn){
    if(arr.length==0){
        return X-Y;
    }
    if(turn==="X") {
        return Math.min(getFinalXMinusY(arr.slice(1), index+1, X, Y+arr[0]??0, "Y"), getFinalXMinusY(arr.slice(0, arr.length-1), index-1, X, Y+arr[arr.length-1]??0, "Y"));
    }
    return Math.max(getFinalXMinusY(arr.slice(1), index+1, X+arr[0]??0,Y, "X"), getFinalXMinusY(arr.slice(0, arr.length-1), index-1, X+arr[arr.length-1]??0, Y, "X"));
}

function getXminusY(arr) {
    let value = {
        XMinusY: undefined,
    }
    let turn ="X";
    return Math.max(getFinalXMinusY(arr.slice(1), 0, arr[0]??0, 0, turn), getFinalXMinusY(arr.slice(0, arr.length-1), arr.length-1, arr[arr.length-1]??0, 0, turn));
}

const getArrayFrfomString = (str) => {
    return str.split(' ').map(e=> parseInt(e));
}

const arr1 = getArrayFrfomString('10 80 90 30');
const arr2 = getArrayFrfomString('10 100 10');
const arr3 = getArrayFrfomString('4 2 9 7 1 5');
 
let dp = new Array(300).fill(0).map(() => new Array(300).fill(undefined));

function deque_(i, j, arr) {
    if(dp[i][j]!=undefined) return dp[i][j];
    if(i==j) return dp[i][j] = arr[i];
    return dp[i][j] = Math.max(arr[i]-deque_(i+1, j, arr), arr[j]-deque_(i, j-1, arr));
}
function dequeBYTrainerMethod(arr) {
    return deque_(0, arr.length-1, arr);
}
console.log(dequeBYTrainerMethod(arr2));