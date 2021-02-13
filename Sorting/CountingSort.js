// Complexity O(n) but requires two more arrays

// assumptio is to be made that array contains integer from 1 to K 
function countingSort(a, n, k) {
    let c=[];
    let b = [];
    for(let i=0;i<=k;i++) {
        c[i] = 0;
    }

    for (let i=0;i<n;i++) {
        c[a[i]] = c[a[i]]+1;
    }

    for(let i=1;i<=k;i++) {
        c[i] = c[i]+c[i-1];
    }
    console.log(c);

    for(let i=n-1;i>=0;i--) {
        b[c[a[i]]] = a[i];
        c[a[i]] = c[a[i]]-1;
    }
    return b;
}

module.exports = {
    countingSort,
};
// let arr = [3,5,1,6,2,8,7];
// console.log(countingSort(arr, arr.length, 8));