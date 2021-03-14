function solve(A, B) {
    const n = A.length;
    let max = 0;
    for(let i=0;i<n;i++) {
        let j=0, sum=0, count=B;
        while(count && i+j<n) {
            if(!A[i+j]) {
                count--;
            }
            j++;
        }
        if(j>max) {
            max=j;
        }
    }
    return max;
}

const A = [1,0,0,1,0,1,0,1,0,1];
const B= 2;

const A1 = [1, 0];
console.log(solve(A1, 1));