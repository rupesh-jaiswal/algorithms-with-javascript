// problem statement https://atcoder.jp/contests/dp/tasks/dp_e
// for notes refer Question 5 in https://github.com/singhsanket143/Unacademy-Notes/blob/main/Atcoder%20Dp%201.pdf

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
    let dp1 = new Array(noOfItems*1000).fill(Infinity);
    let dp2 = new Array(noOfItems*1000).fill(Infinity);
    dp1[0] = 0;
    dp1[v[0]] = w[0];
    for(let i=0;i<noOfItems;i++) {
        for(let j=1;j<=noOfItems*1000;j++) {
            if(v[i]>j) {
                dp2[j] = dp1[j];
            }else {
                dp2[j] = Math.min(dp2[j], dp1[j], w[i]+dp1[j-v[i]]);
            }
        }
        swap(dp1, dp2);
        dp2 = new Array(noOfItems*1000).fill(Infinity);
    }
    let result;
    for(let i=0;i<=noOfItems*1000;i++) {
        if(dp1[i]<=targetWeight) result = i;
    }

    return result;
}

console.log(getMaxValue(w, v, noOfItems, targetWeight));