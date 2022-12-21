const subArraySum = (A) => {
    const rows = A.length;
	    const cols = A[0].length;
        let sumArray = new Array(rows+1).fill(0).map(() => new Array(cols+1).fill(0));
        for(let i=1;i<rows+1;i++) {
            for(let j=1;j<cols+1;j++) {
                sumArray[i][j] = sumArray[i][j-1]+A[i-1][j-1];
            }
        }
        console.log(sumArray);

        for(let i=1;i<rows+1;i++) {
            for(let j=1;j<cols+1;j++) {
                sumArray[j][i] = sumArray[j-1][i]+sumArray[j][i];
            }
        }
        console.log(sumArray);
        return;
        let ans = [];
        for(let i=0;i<B.length;i++) {
            const top = B[i];
            const left = C[i];
            const bottom = D[i];
            const right = E[i];
            
            let sum = sumArray[bottom][right]-sumArray[top-1][right]-sumArray[bottom][left-1]+sumArray[top-1][left-1];
            ans.push(sum);
        }
        return ans;

}

const A = [[1,2,3], [4, 5,6], [7,8,9] ];
subArraySum(A);