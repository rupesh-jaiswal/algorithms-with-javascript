function binary(A, n) {
    if(n<1) {
        console.log(A);
    }else {
        A[n-1] = 0;
        binary(A, n-1);
        A[n-1] = 1;
        binary(A, n-1);
    }
}
const n=4;
binary(new Array(n), n);