const A = [4,6,2,9,34,7];

const merge = (a, b) =>  {
    let i=0;
    let j=0;
    const result = []
    while(i<a.length && j<b.length) {
        if(a[i]<b[j]) {
            result.push(a[i++]);
        }else {
            result.push(b[j++]);
        }
    }
    while(i<a.length) {
        result.push(a[i++]);
    }
    while(j<b.length) {
        result.push(b[j++]);
    }
    return result;
}
const mergeSort = (a, l, r) => {
    if(l>=r) {
        return [a[r]];
    }

    const mid = l+Math.floor((r-l)/2);
    return merge(mergeSort(a, l, mid), mergeSort(a, mid+1, r));
};

console.log(mergeSort(A, 0, A.length-1));