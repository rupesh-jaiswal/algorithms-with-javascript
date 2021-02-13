function findKSmallest(a, low, high, k) {
    if(low>high) {
        return a;
    }
    const pivotPoint = partition(a, low, high);
    if (k==pivotPoint) {
        console.log(a.slice(0, pivotPoint));
    } else if(k<pivotPoint) {
        return findKSmallest(a, low, pivotPoint-1, k);
    } else {
        return findKSmallest(a, pivotPoint+1, high, k);
    }
}

function swap(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function partition(a,low, high) {
    let pivotItem = a[low];
    let j=low;
    for(let i=low+1;i<=high;i++) {
        if(a[i]<pivotItem) {
            j++;
            swap(a, i, j);
        }
    }
    swap(a, low, j);
    return j;
}

let a = [3, 7, 1, 5, 11, 2, 8, 19, 4];

findKSmallest(a, 0, a.length-1, 4);