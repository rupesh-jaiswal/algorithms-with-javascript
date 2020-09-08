function kString(A, n, k) {
    if(n<1) {
        console.log(A);
    }else {
        for (let index = 0; index <k; index++) {
            A[n-1] = index;
            kString(A, n-1,k);
            
        }
    }
}

const n=3;
const A = new Array(n);
const k = 5;
kString(A, n, k);