const xorSubarray = (a) => {
    let ans= 0;
    const n = a.length;
    for(let i=0;i<a.length;i++) {
        let contribution = (i+1)*(n-(i+1)+1);
        if(contribution%2===1) {
            ans^=a[i];
        }
    }
    return ans;
}
return xorSubarray(A)