function solve (A){
    const firstIndex = {};
    console.log(firstIndex);
    const n=A.length;
    for(let i=0;i<n;i++) {
        if(firstIndex[A[i]] ===undefined) {
            firstIndex[A[i]] = i;
        }else {
            const first= firstIndex[A[i]];
            A[first] = A[first]+1;
        }
    }
    console.log(firstIndex);

    return A;
}
const A = [1,2,3,2,3,1,4,2,1,3];
console.log(solve(A));