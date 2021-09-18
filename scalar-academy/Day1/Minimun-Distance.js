const str = "x...o.x...o";


function solve(A){
    let lastIndex = 0;
    let min = Infinity;
    let i=1;
    while(i<A.length) {
        if(A[i]!==".") {
            if(A[lastIndex] === "x" && A[i]==="o") {
                let currentDiff = Math.abs(i-lastIndex);
                if(currentDiff<min) {
                    min=currentDiff;
                }
                lastIndex=i;
        } else if(A[lastIndex] === "o" && A[i]==="x") {
            let currentDiff = Math.abs(i-lastIndex);
            if(currentDiff<min) {
                min=currentDiff;
            }
            lastIndex=i;
        }else {
            lastIndex = i;
            }
        }
        
        i++;
    }
    return min===Infinity?-1: min;
}

console.log(solve(str));