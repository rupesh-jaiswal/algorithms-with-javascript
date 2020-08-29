function create2DArray(noOfRows, noOfColumns) {
    return new Array(noOfRows).fill(0).map(() => new Array(noOfColumns).fill(0));
}

function matrixChainMultiplication(d) {
    const n = d.length;
    const m = create2DArray(n, n);
    const s = create2DArray(n, n);
    let j, min,q;
    for(let p = 1;p<n-1;p++) {
        for(let i=1; i<n-p;i++) {
            j=i+p;
            min=Infinity;
            for(let k=i;k<=j-1;k++) {
                q=m[i][k]+m[k+1][j]+d[i-1]*d[k]*d[j];
                if(q<min) {
                    min=q;
                    s[i][j] = k;
                }
            }
            m[i][j] = min;
        }
    }
    console.log(m[1][n-1]);
}

const d = [5, 4, 6, 2, 7];

console.log(matrixChainMultiplication(d));