const w = [4,3,6,1,2,5];

const calcWater = (A)=> {
        const n = A.length;
        let prefixMax = new Array(n);
        prefixMax[0] = A[0];
        for(let i=1;i<n;i++){
            prefixMax[i] = Math.max(prefixMax[i-1], A[i]);
        };
        let suffixMax = new Array(n);
        suffixMax[n-1] = A[n-1];
        for(let i=n-2;i>=0;i--){
            suffixMax[i] = Math.max(suffixMax[i+1], A[i]);
        };
        let ans=0;
        for(let i=1;i<n;i++) {
            const min = Math.min(prefixMax[i], suffixMax[i]);
            if(min> A[i] ) {
                ans+=min-A[i];
            }
        }
        return ans;
};

console.log(calcWater(w));