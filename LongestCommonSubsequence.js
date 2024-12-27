function create2DArray(rows, columns) {
    return new Array(rows).fill(0).map(() => new Array(columns));
}
function getLeftValue(i, j, lcs) {
    let leftValue=0;
    if(i!==0) {
        leftValue=lcs[i-1][j];
    }
    return leftValue;
}
function getDiagonalValue(i,j,lcs) {
    let diagonalValue;
    if(i==0 || j==0) {
        diagonalValue=0;
    }else {
        diagonalValue=lcs[i-1][j-1];
    }
    return diagonalValue;
}
function getTopValue(i,j,lcs) {
    let topValue = 0; {
        if(j!==0) {
            topValue=lcs[i][j-1];
        }
    }
    return topValue;
}
function getLCS(a,b) {
    const m = a.length;
    const n= b.length;
    let lcs = create2DArray(m, n);
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(a[i]==b[j]) {
                lcs[i][j] = 1+getDiagonalValue(i,j,lcs);
            }else {
                lcs[i][j] = Math.max(getTopValue(i,j,lcs),getLeftValue(i,j,lcs));
            }
        }
    }
    let i=m-1, j=n-1;
    const subSequence = [];
    while(i>=0 && j>=0) {
        
        if(lcs[i][j]==getLeftValue(i,j,lcs)) {
            i=i-1;
        }else if(lcs[i][j]==getTopValue(i,j,lcs)) {
            j=j-1;
        }else {
            subSequence.push(b[j]);
            i--;
            j--;
        }
    }
    console.log(subSequence);
    // complexity is m*n
}
const a="stoneft";
const b="longest";

console.log(getLCS(a, b));