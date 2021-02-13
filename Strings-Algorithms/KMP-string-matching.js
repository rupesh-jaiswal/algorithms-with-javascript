/**
 * here we first study the pattern for prefix and suffix and then prepare a 
 * prefix function for moving j to a prefix char value
 */


 function prefixTable(p) {
    const m = p.length;
    let f=new Array(m).fill(0);
    let i=1, j=0;
    while(i<m) {
        if(p[i]==p[j]) {
            f[i] = j+1;
            i++;
            j++;
        }else if(j>0) {
            j=f[j-1];
        }else {
            i++;
        }
    }
    return f;
}

function stringMatch(t, p) {
    const n = t.length;
    const m = p.length;
    const f = prefixTable(p);
    let i=0,j=0;
    while(i<n) {
        if(t[i]==p[j]) {
            if(j==m-1) {
                return i-j;
            }else {
                i++;
                j++;
            }
        }else if(j>0) {
            j=f[j-1];
        }else {
            i++;
        }
    }
    return -1;
}
const p = 'ababaca';
const p1 = 'ababada';
const t = 'bacbabababacaca'
console.log(stringMatch(t,p1));

