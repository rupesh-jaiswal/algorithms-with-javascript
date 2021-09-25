// https://www.scaler.com/academy/mentee-dashboard/classroom/faang-e2ea7de3-7ced-45ca-92db-3e37a989c8a0/#assignment%2F203


const findPivot = (l, r, A) => {
    if(l>=r) {
        return -1;
    }
    let mid = Math.floor((l+r)/2);
    if(A[mid]<(A[mid-1]?? Infinity)) {
        return mid;
    }
    const index = findPivot(mid+1, r, A);
    if(index===-1) {
        return findPivot(l, mid, A)
    }else {
        return index;
    }
}
const search = (A, B) => {
    const pivotIndex = findPivot(0, A.length, A);
    
    let l=pivotIndex;
    let r=A.length+pivotIndex;
    while(l<=r) {
        const mid = Math.floor((l+r)/2);
        let newMid = mid;
        if(mid>=A.length) {
            newMid = mid-A.length;
        }
        if(A[newMid]===B) {
            return newMid;
        }else if(A[newMid]<B) {
            l=mid+1;
        }else {
            r=mid-1;
        }
    }
    return -1;

}

const A = [4, 5, 6, 7, 0, 1, 2, 3];
 const A1 = [1];
const A2 = [4, 5, 6, 7, 0, 1, 2];
const A3 = [7, 0,1,2,3,4,5,6];
search(A, 5);
search(A1, 1);
search(A2, 4);
search(A3, 4);