function interleavedString(str1, str2, m, n , iStr, i) {
    if(m==0 && n==0) {
        console.log(iStr.join(''));
        return ;
    }
    if(m!=0) {
        iStr[i] = str1[0];
        interleavedString(str1.slice(1), str2, m-1, n, iStr, i+1);
    }
    if(n!==0) {
        iStr[i] = str2[0];
        interleavedString(str1, str2.slice(1), m, n-1, iStr, i+1);
    }
}
function printInterleavedSting(str1, str2) {
    const m = str1.length;
    const n= str2.length;
    let iStr = new Array(m+n).fill('');
    interleavedString(str1, str2, m, n, iStr, 0);
}

const str1= 'XYZ';
const str2 = 'ABC';
printInterleavedSting(str1, str2);