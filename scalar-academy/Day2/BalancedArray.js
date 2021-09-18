// const a = [5,5,2,5,8];
const a = [ 2, 8, 2, 2, 6, 3 ];

function balancedArray(A){
    const n = A.length;
    let prefixEven = new Array(n);
    let prefixOdd  =new Array(n);
    let suffixEven  =new Array(n);
    let suffixOdd = new Array(n);
    for(let i=0;i<n;i++) {
        if(i%2==0){
            prefixEven[i] = A[i]+(i-2>=0?prefixEven[i-2]: 0);
            prefixOdd[i] = i-1>=0? prefixOdd[i-1]:0;
        }else {
            prefixEven[i] = i-1>=0?prefixEven[i-1]:0;
            prefixOdd[i] = A[i]+(i-2>=0?prefixOdd[i-2]:0);
        }
    }
    for(let i=n-1;i>=0;i--) {
        if(i%2===0) {
            suffixEven[i] = A[i]+(i+2<n?suffixEven[i+1]:0);
            suffixOdd[i] = i+1<n?suffixOdd[i+1]:0;
        }else {
            suffixEven[i] = i+1<n?suffixEven[i+1]:0;
            suffixOdd[i] = A[i]+(i+2<n?suffixOdd[i+1]:0);
        }
    }
    let count = 0;
    for(let i=0;i<n;i++) {
        if(i%2==0) {
            let evenSum = (i-2>=0? prefixEven[i-2]: 0)+(i+1<n?suffixOdd[i+1]: 0);
            let oddSum=(i-1>=0? prefixOdd[i-1]:0)+(i+1<n?suffixEven[i+1]: 0);
            if(evenSum==oddSum) {
                count++;
            }
        }else {
            let evenSum = (i-1>=0? prefixEven[i-1]:0)+(i+1<n?suffixOdd[i+1]: 0);
            let oddSum  = (i-2>=0? prefixOdd[i-2]:0)+(i+1<n?suffixEven[i+1]: 0);
            if(evenSum===oddSum) {
                count++;
            }
        }
    }
    return count;
    
}

console.log(balancedArray(a));