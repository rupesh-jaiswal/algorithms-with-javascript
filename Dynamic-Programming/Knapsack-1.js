// problem statement https://atcoder.jp/contests/dp/tasks/dp_d
// for notes refer Question 4 in https://github.com/singhsanket143/Unacademy-Notes/blob/main/Atcoder%20Dp%201.pdf

const noOfItems = 3;
const targetWeight = 8;
const w = [3, 4, 5];
const v = [30, 50, 60];

function swap(arr1, arr2) {
    for(let i=0; i<arr1.length;i++) {
        arr1[i] = arr2[i];
    }
}

function getMaxValue(w, v, noOfItems, targetWeight) {
    let dp1 = new Array(targetWeight+1).fill(0);
    let dp2 = new Array(targetWeight+1).fill(0);
    for(let i=0;i<noOfItems; i++) {
        for(let j=1;j<=targetWeight;j++) {
            if(w[i]>j) {
                dp2[j] = dp1[j];
            }else {
                dp2[j] = Math.max(dp1[j], v[i] + dp1[j-w[i]]);
            }
        }
        swap(dp1, dp2);
        dp2 = new Array(targetWeight).fill(0);
    }
    return dp1[targetWeight];
}
console.log(getMaxValue(w, v, noOfItems, targetWeight));