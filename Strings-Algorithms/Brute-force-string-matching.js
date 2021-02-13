function stringMatch(str, pattern) {
    let n = str.length;
    let m = pattern.length;
    for(let i=0;i<n-m;i++) {
        let j=0;
        while(j<m&& pattern[j]==str[i+j])
            j++;
        if(j==m) {
            console.log('Match found');
            return;
        }
    }
    console.log('Not found');
    return 
}
const str="abdbbjbjjksadk";
const pattern="ksad";

stringMatch(str, pattern);